import React from 'react';
import PropTypes from 'prop-types';

const ContainerApp = (props) => {
  const { children, title } = props;
  return (
    <div className="container-app">
      <h2>{title}</h2>
      <hr />
      <div className="content">{children}</div>
    </div>
  );
};

export default ContainerApp;
