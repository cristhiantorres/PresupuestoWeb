import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from 'utils/auth-util';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
