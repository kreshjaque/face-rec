import React from 'react';
import PropTypes from 'prop-types';
import {MainWrapper} from './MainContainer.style';

const MainContainer = ({ children }) => <MainWrapper>{children}</MainWrapper>;

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default MainContainer;
