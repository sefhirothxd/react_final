import React, { useContext } from 'react';
import SideBar from '../components/SideBar';
import { ProfileContext } from '../context/UseProfileProvider';
import { Navigate, Outlet } from 'react-router-dom';
const LayoutContainerLogin = () => {
  const { login } = useContext(ProfileContext);
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default LayoutContainerLogin;
