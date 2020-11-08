import React from 'react';
import { FormInput, FormSelect } from 'components/elements/forms';
import { Form, FormGroup, Row, Col, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Customer } from 'models';
import { CustomerInputs } from 'inputs';

const CreateCustomerForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(Customer.schema),
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Row form>
        {CustomerInputs.map((input, key) => (
          <Col md={4}>
            <FormGroup>
              {input.type === 'select' ? (
                <FormSelect
                  id={input.name}
                  label={input.label}
                  error={errors[input.name]}
                  control={control}
                  options={input.options}
                />
              ) : (
                <FormInput
                  id={input.name}
                  label={input.label}
                  error={errors[input.name]}
                  ref={register}
                />
              )}
            </FormGroup>
          </Col>
        ))}
      </Row>
      <Button type="submit">Crear</Button>
    </Form>
    );
};

export default CreateCustomerForm;
