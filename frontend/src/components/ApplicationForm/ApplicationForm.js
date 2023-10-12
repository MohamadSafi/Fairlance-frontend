import React, { useState } from 'react';
import { StyledApplicationForm } from './style';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import Request from '../../utils/Request';

const ApplicationForm = ({ projectId, toggleForm }) => {
  const [price, setPrice] = useState('');
  const [proposal, setProposal] = useState('');

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleProposalChange = e => {
    setProposal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const applicationData = {
      bid: parseInt(price),
      proposal,
      project: projectId,
      // freelancer: userID,
    };
    submitApplication(applicationData);
    setPrice('');
    setProposal('');
  };

  const submitApplication = async applicationData => {
    try {
      let applications = localStorage.getItem('applications');
      if (!applications) {
        applications = [];
      } else {
        applications = JSON.parse(applications);
      }
      applications.push(JSON.stringify(applicationData));

      localStorage.setItem('applications', JSON.stringify(applications));
      toast('Application submitted!');
      toggleForm();
    } catch (error) {
      toast.error('Failed to submit application please try again');
    }
  };

  return (
    <StyledApplicationForm>
      <h1>Application details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='price'>
          <h2>Price:</h2>
        </label>
        <div className='price'>
          <p>How much do you want to offer to the post owner? </p>
          <input type='number' id='price' value={price} onChange={handlePriceChange} required />$
        </div>

        <label htmlFor='proposal'>
          <h2>Proposal:</h2>
        </label>
        <textarea
          id='proposal'
          value={proposal}
          onChange={handleProposalChange}
          rows={15}
          required
        />
        <Button type='submit' primary={true}>
          Submit Application
        </Button>
      </form>
    </StyledApplicationForm>
  );
};

export default ApplicationForm;
