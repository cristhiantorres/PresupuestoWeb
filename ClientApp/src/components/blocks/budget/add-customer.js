import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { FormSelect } from 'components/elements/forms';
import PropTypes from 'prop-types';

const AddCustomer = ({ control, errors }) => {
  return (
    <Card>
      <CardBody>
        <FormSelect
          control={control}
          id="cliente"
          label="Elija un cliente"
          options={[
            {
              value: 1,
              label: '5370188 - Cristhian Torres',
            },
            {
              value: 2,
              label: '80055566-5 - Mariam S.A',
            },
            {
              value: 3,
              label: '80055445-8 - Distribuidora Gloria',
            },
            {
              value: 4,
              label: '80005566-8 - Aceites Raul',
            },
            {
              value: 5,
              label: '5370188 - Cristhian Torres',
            },
          ]}
          error={errors}
        />
      </CardBody>
    </Card>
  );
};

AddCustomer.propTypes = {
  control: PropTypes.string,
  errors: PropTypes.array,
};

export default AddCustomer;
