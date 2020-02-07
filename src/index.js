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

ReactDOM.render(<App />, document.getElementById('root'));
