import React, { useState } from 'react';
import { render } from 'react-dom';
import './common.css';

function App() {
  const [state, setState] = useState('CLICK ME');

  return (
    <button type="button" onClick={() => setState('CLICKED')}>
      {state}
    </button>
  );
}

render(<App />, document.getElementById('root'));
