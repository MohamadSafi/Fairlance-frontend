import React from 'react';
import Button from '../../../components/Button/Button';

const IntroForm = ({ nextForm }) => {
  return (
    <form>
      <h2>Job post</h2>
      <p>
        To hire a freelancer, it is important to create a comprehensive job post that includes
        essential details such as the deadline, pricing, and required technologies. Please provide
        all the necessary information on the following pages, keeping in mind that the freelancer is
        expected to complete the job as described in this post—nothing more, nothing less.
      </p>

      <p>
        Once you have finished creating the post, freelancers will leave comments on it, and you
        will have the opportunity to select the best proposal among them.
      </p>
      <p>
        When you recieve your final product, you will have 24 hours to review the delivered job. If
        the freelancer did not provide the required job, you can immediatly contact the support,
        they will stop the tranaction and assist the situation.
      </p>
      <div className='next-page'>
        <Button primary={true} onClick={nextForm}>
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default IntroForm;
