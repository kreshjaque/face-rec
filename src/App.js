import React, { useState } from 'react';
import { render } from 'react-dom';
import { Heading } from './common.styles';

const App = () => {
  const [state, setState] = useState('CLICK ME');

  return (
    <>
      <Heading>Alive</Heading>
      <button type="button" onClick={() => setState('CLICKED')}>
        {state}
      </button>
      ]
    </>
  );
}

render(<App />, document.getElementById('root'));
