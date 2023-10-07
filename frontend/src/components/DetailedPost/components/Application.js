import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { StyledApplication } from '../style';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { toast } from 'react-toastify';
import Request from '../../../utils/Request';

const Application = () => {
  const { projectid, id } = useParams();
  const { authToken } = useContext(AuthContext);
  const [application, setApplication] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/application/${id}/`, Request('GET', '', authToken))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setApplication(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [authToken, id]);

  const hire = () => {
    fetch(
      '/api/offers/create/',
      Request(
        'POST',
        {
          application: id,
        },
        authToken,
      ),
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Unkown error occured');
        }
      })
      .then(() => {
        toast(
          'You have succesffully hired the freelancer. We will tell you when the client accepts your offer',
        );
      })
      .catch((e) => {
        if (e === 'Unkown error occured') toast.error(e);
        else toast.error('Network error');
      });
    navigate(`/post/${projectid}`);
  };

  return (
    <>
      <NavBar notfixed={true} />
      <div style={{ height: '60vh' }}>
        <StyledApplication>
          {application && (
            <>
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
                <Link to={`/post/${projectid}`}>
                  <Button>Return</Button>
                </Link>
                <Button primary={true} onClick={hire}>
                  Hire
                </Button>
              </div>
            </>
          )}
        </StyledApplication>
      </div>
      <Footer />
    </>
  );
};

export default Application;
