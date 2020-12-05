import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { AddArticle, AddCustomer } from 'components/blocks/budget';

const CreateBudgetForm = ({ onSubmit }) => {
  const { handleSubmit, control, errors } = useForm();
  return (
    <Row>
      <Col md={4}>
        <AddCustomer control={control} errors={errors} />
      </Col>
      <Col>
        <AddArticle control={control} errors={errors} />
      </Col>
      <Col md={12} className="mt-2">
        <Button>Generar</Button>
      </Col>
    </Row>
  );
};

CreateBudgetForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CreateBudgetForm;
