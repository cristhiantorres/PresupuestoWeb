import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { AddArticle, AddCustomer } from 'components/blocks/budget';

const CreateBudgetForm = ({ onSubmit, customers, articles }) => {
  const { handleSubmit, control, errors } = useForm();
  return (
    <Row>
      <Col md={5}>
        <AddCustomer control={control} errors={errors} customers={customers} />
      </Col>
      <Col>
        <AddArticle control={control} errors={errors} />
      </Col>
    </Row>
  );
};

CreateBudgetForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CreateBudgetForm;
