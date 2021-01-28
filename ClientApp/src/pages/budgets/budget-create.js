import React from 'react';
import { ContainerApp } from 'components/container';
import { CreateBudgetForm } from 'components/forms/customer';
import { Button, Col, Row } from 'reactstrap';
import { useStateValue } from '../../state-provider';
import { formatMoney } from 'utils/format-util';
import { REMOVE_ITEM } from 'reducer';

const BudgetCreate = () => {
  const [{ budget }, dispatch] = useStateValue();
  const removeItem = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      item: id,
    });
  }
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
              <th>Acciones</th>
            </thead>
            <tbody>
              {budget.items ? (
                budget.items.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td className="text-center">{formatMoney(item.price)}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{formatMoney(item.total)}</td>
                    <td>
                      <Button size="sm" color="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>Sin registros</td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </ContainerApp>
  );
};

export default BudgetCreate;
