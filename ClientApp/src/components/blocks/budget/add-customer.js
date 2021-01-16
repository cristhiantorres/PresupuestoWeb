import React, { useState } from 'react';
import { Card, CardBody, Label } from 'reactstrap';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import { getCustomers } from '../../../api/customer-api';

const AddCustomer = () => {
  const handleInputChange = (newValue) => {
    const value = newValue.replace(/\W/g, '');
    return value;
  };

  const loadOptions = (value, callback) => {
    if (value.length > 1) {
      return getCustomers(value).then((res) => {
        callback(res.map((item) => {
          return {
            value: item.id,
            label: `${item.firstName} ${item.lastName} - ${item.documentNumber}`,
          }
        }));
      })
    }
  }
  return (
    <Card>
      <CardBody>
        <Label className="font-weight-bold">Cliente</Label>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          onInputChange={handleInputChange}
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
