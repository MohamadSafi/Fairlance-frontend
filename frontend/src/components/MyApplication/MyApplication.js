import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMyApplication } from './style';

const MyApplication = ({ idx, application }) => {
  return (
    <div>
      <StyledMyApplication>
        {application && (
          <>
          <h2>Application #{idx+1}</h2>
            <Link to={`/post/${application.project_id}`}>
              <h3 style={{color: "#1e88e5"}}>
                Project: {application.project_title}
              </h3>
            </Link>
            <h3>Proposal Message:</h3>
            <p>{application.proposal}</p>
            <h3>Asking Price: ${application.bid}</h3>  
          </>
        )}
      </StyledMyApplication>
    </div>
  );
};

export default MyApplication;
