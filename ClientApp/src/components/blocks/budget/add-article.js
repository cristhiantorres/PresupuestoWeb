import { FormInput, FormSelect } from 'components/elements/forms';
import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

const AddArticle = ({ control, errors }) => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={6}>
            <FormSelect
              control={control}
              id="articulo"
              label="Articulo"
              options={[
                {
                  value: 1,
                  label: '556699 - Cremallera - Toyota CAMI',
                },
                {
                  value: 2,
                  label: '6655 - Cambio de Volante',
                },
                {
                  value: 3,
                  label: '3399 - Alineacion y Balanceo',
                },
                {
                  value: 4,
                  label: '5888 - Chaperia y Pintura',
                },
              ]}
              error={errors}
            />
          </Col>
          <Col md={3}>
            <FormInput
              id="precio"
              label="Precio"
              type="number"
            />
          </Col>
          <Col md={3}>
            <FormInput
              id="cantidad"
              label="Cantidad"
              type="number"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
};

export default AddArticle;
