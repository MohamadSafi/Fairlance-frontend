import React, { useContext } from 'react';
import { StyledOffer } from '../style';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Request from '../../../utils/Request';
import AuthContext from '../../../context/AuthContext';
import { toast } from 'react-toastify';

const Offer = ({ owner, project, projectid, noOffer, idx, applicationid }) => {
  const { authToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const accept = () => {
    console.log(applicationid);
    fetch(`/api/offers/`, Request('POST', { application_id: applicationid }, authToken))
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const e = await res.json();
          console.log(e)
          if (e && e.details) {
            throw new Error('already working on it')
          }
          throw new Error(e);
        }
      })
      .then(() => {
        navigate(`/post/${projectid}`);
        toast('You are hired, please start working on the project and submit here');
      })
      .catch((e) => {
        if (e.toString().includes('already working on it')) {
          toast.error('The project already has somethong working on it')
        }
        else {
          toast.error('Known error, please try again'); 
        }
      });
  };

  return (
    <StyledOffer>
      {!noOffer ? (
        <>
          <h2>Offer #{idx + 1}</h2>
          <p>
            You got offer from {owner} on <Link to={`/post/${projectid}`}>{project}</Link> project
          </p>
          <div className='options'>
            <Button>Decline</Button>
            <Button primary={true} onClick={accept}>
              Accept
            </Button>
          </div>
        </>
      ) : (
        <p>You don't have offers yet, we will notify you as soon as you get a new offer</p>
      )}
    </StyledOffer>
  );
};

export default Offer;
