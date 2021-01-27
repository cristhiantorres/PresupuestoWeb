import React from 'react';
import { ContainerApp } from 'components/container';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { formatMoney } from 'utils/format-util';
import { useBudgetById } from 'hooks/budget-hook';
import { Link, useParams } from 'react-router-dom';
import { Loader } from 'components/elements/status';

const BudgetShow = () => {
  const { id } = useParams();
  const [data, isLoading] = useBudgetById(id);

  return (
    <ContainerApp title="Ver Presupuesto">
      {!isLoading && data ? (
      <Row>
        <Col md={6}>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <ul className="list-unstyled">
                    <li><b>#{data.id}</b></li>
                    <li>Cliente: <b>{data.customerName}</b></li>
                    <li>Total: <b className="total">{formatMoney(data.total)}</b></li>
                  </ul>
                </Col>
                <Col>
                  <Link className="btn btn-default mb-2" to={`/presupuestos/pdf/${data.id}`}>Generar PDF</Link>
                  <Button>Generar PDF y Enviar</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
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
              {data.details.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td className="text-center">{formatMoney(item.price)}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">{formatMoney(item.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
      ) : (
        <Row>
          <Col>
           <Loader />
          </Col>
        </Row>
      )}
    </ContainerApp>
  );
};

export default BudgetShow;
