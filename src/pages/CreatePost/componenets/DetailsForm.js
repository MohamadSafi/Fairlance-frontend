import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const DetailsForm = ({ nextForm, prevForm, description, setDescription }) => {
  const [descriptionError, setDescriptionError] = useState(false);

  const check = (e, nextCall) => {
    if (!description) {
      setDescriptionError(true);
    } else {
      nextCall(e);
    }
  };

  return (
    <form>
      <h2>Job details</h2>
      <label htmlFor='description'>Job description</label>
      <p>
        Please provide a comprehensive and detailed description of your job. It is important to note
        that the freelancer is bound to deliver all the specific details mentioned here, ensuring
        there are no additional or omitted requirements.
      </p>
      <textarea
        type='text'
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ErrorMessage errorMsg='job description is required' errorState={descriptionError} />
      <div className='next-page'>
        <Button onClick={prevForm}>Previous Page</Button>
        <Button
          primary={true}
          onClick={(e) => {
            e.preventDefault();
            check(e, nextForm);
          }}
        >
          Next page
        </Button>
      </div>
    </form>
  );
};

export default DetailsForm;
