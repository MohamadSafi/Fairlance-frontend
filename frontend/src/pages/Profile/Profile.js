import React from 'react';
import './style';
import NavBar from '../../components/NavBar/NavBar';
import MainView from './Components/MainView';
import Footer from '../../components/Footer/Footer';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <MainView />
      <Footer />
    </div>
  );
};

export default Profile;
