import React, { useContext } from 'react';
import logo from '../../assets/images/logo-new.png';
import { Link } from 'react-router-dom';
import { StyledNav, Menu } from './style';
import AuthContext from '../../context/AuthContext';

const NavBar = ({ notfixed }) => {
  const { userFirstName, logout, userLastName } = useContext(AuthContext);
  const { userID } = useContext(AuthContext);

  return (
    <StyledNav id='nav-bar' $notfixed={notfixed}>
      <div id='nav-container'>
        <li>
          <Link to='/'>
            <img srcSet={logo} alt='' />
          </Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/find-job' state={'/find-job'}>
            Find job
          </Link>
        </li>
        <li>
          <Link to='/create-post' state={'/create-post'}>
            Add job
          </Link>
        </li>
        {userFirstName ? (
          <>
            <li>
              <Menu>
                <div className='dropdown'>
                  <button className='dropbtn'>
                    <span className='name-head'>{userFirstName} {userLastName}</span> <i className='fa-solid fa-caret-down'></i>
                  </button>
                  <div className='dropdown-content'>
                    <li>
                      <Link to={`/users/${userID}/applications`}>My Applications</Link>
                    </li>
                    <li>
                      <Link to={`/offers`}>My Offers</Link>
                    </li>
                    <li>
                      <Link to={`/profile/${userID}`}>My Profile</Link>
                    </li>
                    <li>
                      <button onClick={() => logout()}>Log out</button>
                    </li>
                  </div>
                </div>
              </Menu>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' state={'/'}>
                Log in
              </Link>
            </li>
            <li>
              <Link to='/signup' state={'/'}>
                Sign up
              </Link>
            </li>
          </>
        )}
      </div>
    </StyledNav>
  );
};

export default NavBar;
