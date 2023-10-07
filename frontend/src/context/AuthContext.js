import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const notify = (msg) => toast(msg);
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null,
  );
  // TODO: find a better way to get the user (JWT maybe)
  const [user, setUser] = useState(() =>
    localStorage.getItem('userName') && localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('userName'))
      : null,
  );
  const [userID, setUserID] = useState(() =>
    localStorage.getItem('userID') && localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('userID'))
      : null,
  );
  const [userFirstName, setUserFirstName] = useState(() =>
    localStorage.getItem('userFirstName') && localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('userFirstName'))
      : null,
  );
  const [userLastName, setUserLastName] = useState(() =>
    localStorage.getItem('userLastName') && localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('userLastName'))
      : null,
  );
  const navigate = useNavigate();
  const registerUser = async (data) => {
    console.log(data);
    try {
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          first_name: data.firstname,
          last_name: data.lastname,
          username: data.email,
          password: data.password,
        }),
      };
      console.log(req);
      const res = await fetch('/api/users/', req);
      if (res.ok) {
        let ret = await res.json();
        console.log(ret);
        notify('please login now');
        navigate('/login');
      } else {
        let ret = await res.json();
        console.log(ret);
        console.log(ret.username);
        if (ret.username.includes('A user with that username already exists.')) {
          toast.error(`A username with this email exists try to login`);
        } else {
          toast.error(`Something went wrong`);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const loginUser = async (data, dist) => {
    console.log(data);
    try {
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
      };
      const res = await fetch('/api/users/auth/', req);
      console.log(res);
      let ret = await res.json();
      console.log(ret);
      if (res.status === 200) {
        setAuthToken(ret.token);
        setUser(data.email);
        setUserID(ret.id);
        setUserFirstName(ret.first_name);
        setUserLastName(ret.last_name);
        localStorage.setItem('authToken', JSON.stringify(ret.token));
        localStorage.setItem('userID', JSON.stringify(ret.id));
        localStorage.setItem('userFirstName', JSON.stringify(ret.first_name));
        localStorage.setItem('userLastName', JSON.stringify(ret.last_name));
        localStorage.setItem('userName', JSON.stringify(data.email));
        console.log(data);
        notify(`Welcome back ${data.email}`);
        console.log(dist);
        if (dist) {
          navigate(dist);
        } else {
          navigate('/');
        }
      } else {
        console.log(ret['non_field_errors']);
        if (
          ret['non_field_errors'] &&
          ret['non_field_errors'].includes('Unable to log in with provided credentials.')
        ) {
          toast.error(`Sorry you provided wrong email or passowrd, try again`);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userID');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userLastName');
    notify('Logged out successfully');
    navigate('/');
    setAuthToken(null);
    setUser(null);
    setUserFirstName(null);
  };
  let contextData = {
    loginUser: loginUser,
    registerUser: registerUser,
    logout: logout,
    user: user,
    authToken: authToken,
    userID: userID,
    userFirstName: userFirstName,
    userLastName: userLastName,
    setUserFirstName: setUserFirstName,
  };
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
