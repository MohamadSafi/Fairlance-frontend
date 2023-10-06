import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import * as React from 'react';
import FindJobPage from './pages/FindJob/FindJob';
import FAQ from './pages/FAQ/FAQ';
import CreatePost from './pages/CreatePost/CreatePost';
import PostDetailsPage from './pages/PostDetails/PostDetails';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import MyOffers from './pages/MyOffers/MyOffers';
import FeedBack from './components/FeedBack/FeedBack';

import 'react-toastify/dist/ReactToastify.css';

import Application from './components/DetailedPost/components/Application';
import Profile from './pages/Profile/Profile';
import MyApplications from './pages/MyApplications/MyApplications';
import GuestRoute from './utils/GuestRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<GuestRoute />}>
            <Route path='/login' element={<LoginPage />} />
          </Route>
          <Route path='/signup' element={<GuestRoute />}>
            <Route path='/signup' element={<SignupPage />}></Route>
          </Route>
          <Route path='/faq' element={<FAQ />}></Route>

          <Route path='/create-post' element={<PrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />}></Route>
          </Route>

          <Route path='/faq' element={<FAQ />} />

          <Route path='/find-job' element={<PrivateRoute />}>
            <Route path='/find-job' element={<FindJobPage />}></Route>
          </Route>

          <Route path='/post/:id' element={<PrivateRoute />}>
            <Route path='/post/:id' element={<PostDetailsPage />}></Route>
          </Route>

          <Route path='/offers' element={<MyOffers />}></Route>
          <Route path='/post/:projectid/application/:id' element={<PrivateRoute />}>
            <Route path='/post/:projectid/application/:id' element={<Application />}></Route>
          </Route>

          <Route path='/users/:userID/applications' element={<PrivateRoute />}>
            <Route path='/users/:userID/applications' element={<MyApplications />}></Route>
          </Route>

          <Route path='/profile/:id' element={<Profile />}>
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer position='bottom-right' autoClose={2000} hideProgressBar={true} />
      <FeedBack></FeedBack>
    </>
  );
}

export default App;
