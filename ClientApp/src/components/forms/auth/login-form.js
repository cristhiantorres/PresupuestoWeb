import { login } from 'api/auth-api';
import { FormInput } from 'components/elements/forms';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, FormGroup } from 'reactstrap';
import { SET_USER } from 'reducer';
import { useStateValue } from 'state-provider';

const LoginForm = () => {
  const [, dispatch] = useStateValue();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    login(username, password).then((res) => {
      if (res === 1) {
        dispatch({
          type: SET_USER,
          item: true,
        });
      }
      toast.error('Credenciales invalidas!');
    }).catch((error) => {
      toast.error('Ops ocurrio un error... !!');
      console.error('error', error);
    })
  };

  return (
    <>
      <FormGroup>
        <FormInput
          id="username"
          label="Usuario"
          type="text"
          handleChange = {(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          id="password"
          label="Contraseña"
          type="password"
          handleChange = { (e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" onClick={() => { onLogin()}} block>Ingresar</Button>
    </>
  );
};

export default LoginForm;
