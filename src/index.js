import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer/MainContainer';

const App = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

export default hot(App);

ReactDOM.render(<App />, document.getElementById('root'));
