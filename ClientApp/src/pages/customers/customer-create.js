import React from 'react';
import { CreateCustomerForm } from 'components/forms/customer';
import { ContainerApp } from 'components/container';
import { Col, Row } from 'reactstrap';

const CreateCustomer = () => {
  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <ContainerApp title="Crear cliente">
      <Row>
        <Col md={7}>
          <CreateCustomerForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </ContainerApp>
  );
};

export default CreateCustomer;
