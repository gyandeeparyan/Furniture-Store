import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return (<>
     //display a alert on window that says you need to be logged in
alert('You need to be logged in to access this page');
      <Navigate to='/' />
      </>)
  }
  return children;
};
export default PrivateRoute;
