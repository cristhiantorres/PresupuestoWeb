import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { LoginForm } from 'components/forms/auth';
import CardTitle from 'reactstrap/lib/CardTitle';

const Login = () => {
  return (
    <div className="w-50 mx-auto">
      <Card>
        <CardBody>
          <CardTitle className="text-center">INICIAR SESION</CardTitle>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
