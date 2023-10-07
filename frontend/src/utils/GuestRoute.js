import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';

const GuestRoute = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      toast(`${user} you are already logged in`);
    }
  }, [user]);
  return !user ? <Outlet /> : <Navigate to='/' />;
};

export default GuestRoute;
