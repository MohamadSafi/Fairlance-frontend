import React, { useContext } from 'react';
import logo from '../../assets/images/logo-new.png';
import { Link } from 'react-router-dom';
import { StyledNav, Menu } from './style';
import AuthContext from '../../context/AuthContext';
import { useAccount } from 'wagmi';
import { Avatar, ConnectKitButton } from 'connectkit';
import { ReactComponent as Profilelogo } from '../../assets/svg/profile.svg';
import { useEnsAvatar } from 'wagmi';

const NavBar = ({ notfixed }) => {
  const { userID } = useContext(AuthContext);

  const { isConnected } = useAccount();
  const { data, isError, isLoading } = useEnsAvatar({
    name: 'jxom.eth',
  });

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
        {isConnected ? (
          <>
            <li>
              <Menu>
                <div className='dropdown'>
                  <button className='dropbtn'>
                    <Profilelogo />
                    {/* <img src={data} alt='' className='profile-picture' /> */}
                  </button>
                  <div className='dropdown-content'>
                    <li>
                      <Link to={`/applications`}>My Applications</Link>
                    </li>
                    <li>
                      <Link to={`/offers`}>My Offers</Link>
                    </li>
                    <li>
                      <Link to={`/profile`}>My Profile</Link>
                    </li>
                    <li>
                      <ConnectKitButton mode='light' />
                    </li>
                  </div>
                </div>
              </Menu>
            </li>
          </>
        ) : (
          <>
            {/* <li>
              <Link to='/login' state={'/'}>
                Log in
              </Link>
            </li>
            <li>
              <Link to='/signup' state={'/'}>
                Sign up
              </Link>
            </li> */}
            <ConnectKitButton mode='light' />
          </>
        )}
      </div>
    </StyledNav>
  );
};

export default NavBar;
