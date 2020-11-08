import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from 'components/navbar';

const LayoutApp = (props) => {
    return (
      <div>
        <NavMenu />
        <Container>
          {props.children}
        </Container>
      </div>
    );
};

export default LayoutApp;
