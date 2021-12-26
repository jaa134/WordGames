import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';

/**
 * The TestWrapper component provides all the necessary context
 * providers and utilities for testing this project's components.
 */
const TestWrapper = ({
  children
}) => (
  <HashRouter>
    {children}
  </HashRouter>
);

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestWrapper;
