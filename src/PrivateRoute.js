import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(prop) =>
        isAuthenticated ? <component {...props} /> : <Redirect to={{ pathname: '/login' }} />
      }
    />
  );
};

export default PrivateRoute;
