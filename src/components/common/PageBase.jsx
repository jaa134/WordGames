import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../../utils/defineBlock';
import './PageBase.scss';

const bem = defineBlock('PageBase');

const PageBase = ({
  className,
  children
}) => (
  <div className={`${bem()} ${className}`}>
    {children}
  </div>
);

PageBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

PageBase.defaultProps = {
  className: ''
};

export default PageBase;
