import { FormInput } from 'components/elements/forms';
import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <FormInput
          id="email"
          label="Correo Electronico"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          id="password"
          label="Contraseña"
          type="password"
        />
      </FormGroup>
      <Button type="submit" block>Ingresar</Button>
    </Form>
  );
};

export default LoginForm;
