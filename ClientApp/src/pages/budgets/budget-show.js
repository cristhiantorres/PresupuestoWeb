import React from 'react';
import { ContainerApp } from 'components/container';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { formatMoney } from 'utils/format-util';
import { useBudgetById } from 'hooks/budget-hook';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/elements/status';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { BudgetPdf } from 'components/pdf';

const BudgetShow = () => {
  const { id } = useParams();
  const [data, isLoading] = useBudgetById(id);

  return (
    <ContainerApp title="Ver Presupuesto">
      {!isLoading && data ? (
      <Row>
        <Col md={7}>
          <Card>
            <CardBody>
              <Row>
                <Col md={8}>
                  <ul className="list-unstyled details">
                    <li>
                      <span>Nro. Presupuesto</span>
                      <b>{data.id.toString().padStart(8, '0')}</b></li>
                    <li>
                      <span>Cliente</span>
                      <b>{data.customerName}</b>
                    </li>
                    <li>
                      <span>Correo</span>
                      <b>{data.customerEmail || ''}</b>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-unstyled details">
                    <li>
                      <span>Total</span>
                      <b className="total">{formatMoney(data.total)}</b>
                    </li>
                  </ul>
                  { data.details && (
                    <PDFDownloadLink
                      document={<BudgetPdf budget={data} />}
                      fileName={`presupuesto-${data.id}.pdf`}
                      className="btn btn-primary btn-block mb-2">
                        {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
                    </PDFDownloadLink>
                  )}
                  <Button className="btn-block">Enviar presupuesto</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={12}>
          <hr />
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
              {data.details ? (
                data.details.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td className="text-center">{formatMoney(item.price)}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{formatMoney(item.total)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">Sin registros</td>
                </tr>
              )}
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
