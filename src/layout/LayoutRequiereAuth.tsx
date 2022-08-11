import React, { useContext } from 'react';
import { ProfileContext } from '../context/UseProfileProvider';
import { Navigate, Outlet } from 'react-router-dom';
const LayoutRequiereAuth = () => {
  const { login } = useContext(ProfileContext);
  if (!login) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutRequiereAuth;
