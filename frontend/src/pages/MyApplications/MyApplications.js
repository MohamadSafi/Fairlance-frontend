import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Code } from 'react-content-loader';
import AuthContext from '../../context/AuthContext';
import { StyledLoading, StyledMyApplications } from './style';
import Footer from '../../components/Footer/Footer';
import MyApplication from '../../components/MyApplication/MyApplication';
import { useParams } from 'react-router-dom';
import Request from '../../utils/Request';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = () => {
      let applications = JSON.parse(localStorage.getItem('applications') || '[]').map(
        (value, idx, _) => JSON.parse(value),
      );
      setApplications(applications);
      setTimeout(() => setLoading(false), 2000);
    };
    setLoading(true);
    load();
  }, [setApplications]);

  return (
    <div>
      <NavBar notfixed={true} />
      <StyledMyApplications>
        <div style={{ height: '70vh' }}>
          <h1>My Applications</h1>
          {!loading || applications.length ? (
            applications.map((application, idx) => {
              return <MyApplication application={application} idx={idx} key={idx}></MyApplication>;
            })
          ) : (
            <StyledLoading className='loading-container'>
              <div>
                <Code className='loading' />
              </div>
              <div>
                <Code className='loading' />
              </div>
              <div>
                <Code className='loading' />
              </div>
              <div>
                <Code className='loading' />
              </div>
            </StyledLoading>
          )}
        </div>
      </StyledMyApplications>
      <Footer />
    </div>
  );
};

export default MyApplications;
