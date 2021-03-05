import React, { useState } from 'react';
import { render } from 'react-dom';
import { Heading } from './common.styles';
import MainContainer from './components/MainContainer/MainContainer';

const App = () => {
  const [state, setState] = useState('CLICK ME');

  return (
    <MainContainer>
      <Heading>Alive</Heading>
      <button type="button" onClick={() => setState('CLICKED')}>
        {state}
      </button>
      ]
    </MainContainer>
  );
};

render(<App />, document.getElementById('root'));
