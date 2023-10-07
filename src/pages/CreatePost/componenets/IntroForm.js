import React from 'react';
import Button from '../../../components/Button/Button';
import jobPost from '../../../assets/svg/jobPost.svg';

const IntroForm = ({ nextForm }) => {
  return (
    <form style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 0,
          top: 250,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <img src={jobPost} alt='' style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
      </div>

      <div style={{ position: 'absolute', zIndex: 10 }}>
        <h2>Job post</h2>
        <p>
          To hire a freelancer, it is important to create a comprehensive job post that includes
          essential details such as the deadline, pricing, and required technologies. Please provide
          all the necessary information on the following pages, keeping in mind that the freelancer
          is expected to complete the job as described in this post—nothing more, nothing less.
        </p>

        <p>
          Once you have finished creating the post, freelancers will leave comments on it, and you
          will have the opportunity to select the best proposal among them.
        </p>
        <p>
          When you receive your final product, you will have 24 hours to review the delivered job.
          If the freelancer did not provide the required job, you can immediately contact the
          support, they will stop the transaction and assist the situation.
        </p>
      </div>

      <div className='next-page'>
        <Button primary={true} onClick={nextForm}>
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default IntroForm;
