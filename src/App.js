import React from 'react';
import * as faceApi from 'face-api.js';
import WebCam from "react-webcam";
import './App.css';
import { orderBy } from 'lodash';

export default class App extends React.Component {
  setRef = webCam => {
    this.webcam = webCam;
  };

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      timerId: null
    };
    this.webcam = React.createRef();
  }

  analyse = async () => {
    console.log("called", this.webcam);
    this.setState({ expression: "" });
    const image = new Image();
    image.src = this.webcam.getScreenshot();
    const detectionsWithExpressions = await faceApi.detectAllFaces(image).withFaceExpressions();
    console.log("expressions", detectionsWithExpressions);
    if (detectionsWithExpressions && detectionsWithExpressions.length !== 0) {
      const expression = orderBy(detectionsWithExpressions[0].expressions, ['probability'], ['desc'])[0]['expression'];
      console.log("expression", expression);
      this.setState(
        {
          image: image.src,
          expression
        }
      );
      if (expression !== "happy") {
        this.setState({ oldImage: image.src });
        this.analyse();
      }
    }
  };

  async componentDidMount() {
    await faceApi.loadFaceDetectionModel("models");
    await faceApi.loadFaceExpressionModel("models");
    await faceApi.loadSsdMobilenetv1Model('models')
  }
  startProcess() {
    setTimeout(() => {
      this.analyse();
    }, 1000);
  }

  getSuccess() {
    return (
      <div className="container">
        <img alt="not happy" className="nothappy" src={this.state.image} />
      </div>
    )
  }

  render() {
    const videoConstraints = {
      width: 350,
      height: 350,
      facingMode: 'user',
    };
    return (
      <div className="App">
        <div className="App-header">
          {this.state.expression === "happy" ? this.getSuccess() : 'sad'}
          <WebCam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            onUserMedia={() => { this.startProcess() }}
            videoConstraints={videoConstraints}
          />
          <div className="expression">{this.state.expression ? this.state.expression : ""}</div>
          <button onClick={() => { this.analyse() }} >Detect</button>
        </div>
      </div>
    );
  }
}
