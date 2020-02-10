import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
  it('should pass', () => {
    const container = render(<MainContainer />);
    expect(container).toMatchSnapshot();
  });
});
