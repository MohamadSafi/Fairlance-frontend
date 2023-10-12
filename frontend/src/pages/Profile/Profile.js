import React from 'react';
import './style';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Balance from './Components/Balance';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <Balance />
      <Footer />
    </div>
  );
};

export default Profile;
