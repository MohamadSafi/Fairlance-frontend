import React from 'react';
import logo from '../../assets/images/logo.png';
import { StyledFooter } from './style';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='lists-container'>
        <ul>
          <li>
            <img srcSet={logo} alt='' />
          </li>
          <li>
            <a href='#help'>Help and support</a>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
        <ul>
          <li>FairLance</li>
          <li>
            <a href='#categories'>Categories</a>
          </li>
          <li>
            <Link to='/find-job'>Projects</Link>
          </li>
          <li>
            <a href='#membership'>Membership</a>
          </li>
          <li>
            <a href='#get-verified'>Get verified</a>
          </li>
        </ul>
        <ul>
          <li>About</li>
          <li>
            <a href='#about-us'>About us</a>
          </li>
          <li>
            <a href='#how-to-start'>How to start</a>
          </li>
          <li>
            <a href='#investors'>Investor</a>
          </li>
          <li>
            <a href='#careers'>Careers</a>
          </li>
        </ul>
        <ul>
          <li>Terms</li>
          <li>
            <a href='#privacy'>Privacy</a>
          </li>
          <li>
            <a href='#security'>Security</a>
          </li>
          <li>
            <a href='#fees'>Fees and charges</a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
