import React from 'react';
import { ContainerApp } from 'components/container';
import { CreateBudgetForm } from 'components/forms/customer';
import { Col, Row } from 'reactstrap';

const BudgetCreate = () => {
  return (
    <ContainerApp title="Crear Presupuesto">
      <Row>
        <Col md={12}>
          <CreateBudgetForm />
          <hr />
        </Col>
        <Col md={12}>
          <h5>Listado de articulos.</h5>
          <table className="table table-bordered table-sm">
            <thead>
              <th className="text-center">ID</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
            </thead>
            <tbody>
            </tbody>
          </table>
        </Col>
      </Row>
    </ContainerApp>
  );
};

export default BudgetCreate;
