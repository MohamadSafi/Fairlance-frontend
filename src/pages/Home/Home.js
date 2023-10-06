import React, { useEffect } from 'react';
import MainView from './Components/MainView';
import NavBar from '../../components/NavBar/NavBar';
import Options from './Components/Options';
import Recents from '../../components/Recents/Recents';
import Footer from '../../components/Footer/Footer';
import WhyUs from './Components/WhyUs';
const RECENT_POSTS_URL =
  process.env.REACT_APP_RECENT_POSTS || 'http://localhost:3030/delivered-posts';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar />
      <MainView />
      <Options />
      <WhyUs />
      <Recents URL={RECENT_POSTS_URL} done={false} />
      <Footer />
    </div>
  );
};

export default Home;
