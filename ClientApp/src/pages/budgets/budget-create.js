import React from 'react';
import { ContainerApp } from 'components/container';
import { CreateBudgetForm } from 'components/forms/customer';
import { Col, Row } from 'reactstrap';

const BudgetCreate = () => {
  return (
    <ContainerApp title="Crear Presupuesto">
      <Row>
        <Col md={7}>
          <CreateBudgetForm />
        </Col>
      </Row>
    </ContainerApp>
  );
};

export default BudgetCreate;
