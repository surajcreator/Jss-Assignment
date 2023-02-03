import React from 'react';

const AuthProvider = (Wrapper) => {
  const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
  const AuthProvider = (props) => {
    isAuthenticated ? <Wrapper {...this.props} /> : (window.location.href = '/login');
  };

  return AuthProvider;
};

export default AuthProvider;
