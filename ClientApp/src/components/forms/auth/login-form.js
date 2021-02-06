import React, { useState } from 'react';
import { login } from 'api/auth-api';
import { ButtonLoading, FormInput } from 'components/elements/forms';
import { toast } from 'react-toastify';
import { FormGroup } from 'reactstrap';
import { SET_USER } from 'reducer';
import { useStateValue } from 'state-provider';

const LoginForm = () => {
  const [, dispatch] = useStateValue();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    login(username, password).then((res) => {
      if (res === 1) {
        dispatch({
          type: SET_USER,
          item: true,
        });
      }
      toast.error('Credenciales invalidas!');
      setLoading(false);
    }).catch((error) => {
      toast.error('Ops ocurrio un error... !!');
      console.error('error', error);
      setLoading(false);
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
      <ButtonLoading
        type="submit"
        isLoading={loading}
        onClick={() => { onLogin()}}
        block
        text="Ingresar"
      />
    </>
  );
};

export default LoginForm;
