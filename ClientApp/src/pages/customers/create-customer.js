import React from 'react';
import { LayoutApp } from 'components/layout';
import { CreateCustomerForm } from 'components/forms/customer';
import { ContainerApp } from 'components/container';
import { Col, Row } from 'reactstrap';

const CreateCustomer = () => {
  return (
    <ContainerApp title="Crear cliente">
      <Row>
        <Col md={7}>
          <CreateCustomerForm />
        </Col>
      </Row>
    </ContainerApp>
  );
};

export default CreateCustomer;
