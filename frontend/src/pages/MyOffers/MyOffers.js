import React, { useContext, useEffect, useState } from 'react';
import { StyledOffers } from './style';
import NavBar from '../../components/NavBar/NavBar';
import Offer from './components/Offer';
import AuthContext from '../../context/AuthContext';

const MyOffers = () => {
  const { authToken } = useContext(AuthContext);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `token ${authToken}`,
        'ngrok-skip-browser-warning': 'true',
      },
    };
    fetch('/api/offers/list/', req)
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
      })
      .catch(() => {});
  }, [authToken]);

  return (
    <>
      <NavBar notfixed={true} />
      <StyledOffers>
        <h1>Received Offers</h1>
        {offers.map((offer, idx) => {
          return (
            <Offer
              key={idx}
              idx={idx}
              applicationid={offer.application}
              owner={offer.project_owner}
              project={offer.project_title}
              projectid={offer.project_id}
            />
          );
        })}
        {offers.length === 0 && <Offer noOffer={true} />}
      </StyledOffers>
    </>
  );
};

export default MyOffers;
