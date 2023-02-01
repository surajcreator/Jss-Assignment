import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthProvider = (Wrapper) => {
  const history = useHistory();
  return (AuthProviderComponent = ({ isAuthenticated, ...props }) => {
    isAuthenticated ? <Wrapper {...this.props} /> : history.push('/login');
  });
};

export default AuthProvider;
