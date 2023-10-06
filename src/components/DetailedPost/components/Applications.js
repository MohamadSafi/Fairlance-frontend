import React, { useContext, useEffect, useState } from 'react';
import { StyledApplications } from '../style';
import AuthContext from '../../../context/AuthContext';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import EmptyApplication from './EmptyApplication';
import { List } from 'react-content-loader';
import Request from '../../../utils/Request';

const Applications = ({ id }) => {
  const { authToken } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      await fetch(`/api/application/list/${id}/`, Request('GET', '', authToken))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setApplications(data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    };
    load();
  }, [authToken, id]);

  return (
    <StyledApplications>
      <h2>Applications</h2>
      {applications.length === 0 && !loading && <EmptyApplication />}
      {loading && <List className='loading' />}
      {applications.map((application, idx) => {
        console.log(application);
        return (
          <div key={idx}>
            <Link to={`/profile/${application.freelancer}`}>
              <h4>
                {application.freelancer_first_name} {application.freelancer_last_name}
              </h4>
            </Link>
            <p>{application.proposal}</p>
            <div className='price-info'>
              <div className='price-range'>
                <div>{application.bid} $</div>
              </div>
              <Link to={`application/${application.id}`}>
                <Button primary={true}>View proposal</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </StyledApplications>
  );
};

export default Applications;
