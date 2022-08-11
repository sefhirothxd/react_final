import React, { useContext } from 'react';
import { ProfileContext } from '../context/UseProfileProvider';
import { Navigate, Outlet } from 'react-router-dom';
const LayoutContainerLogin = () => {
  const { login } = useContext(ProfileContext);
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutContainerLogin;
