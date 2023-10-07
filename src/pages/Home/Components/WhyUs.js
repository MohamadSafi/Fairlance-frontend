import React, { useMemo } from 'react';
import whyus from '../../../assets/svg/why-us.svg';
import LeftPoster from '../../../components/Poster/LeftPoster';
import Button from '../../../components/Button/Button';
import { StyledWhyUs } from '../style';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import getScrollAnimation from '../../../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../../../utils/ScrollAnimationWrapper';

const WhyUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const contentItems = [
    {
      title: 'Post quickly and for free',
      description: 'We do not ask for any money to post your projects',
      icon: 'fa-solid fa-business-time',
    },
    {
      title: 'Work with the best from all over the world',
      description:
        'FairLance is created to break the borders. We do not ask users to display their nationalities on their profile.',
      icon: 'fa-solid fa-globe',
    },
    {
      title: 'Small transaction fees',
      description:
        'You can pay using crypto on our website. The most reliable and fastest payment method with almost no transaction fees.',
      icon: 'fa-brands fa-bitcoin',
    },
  ];

  const Content = () => {
    return (
      <StyledWhyUs>
        <ScrollAnimationWrapper>
          <h1>Why FairLance?</h1>
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              className='relative custom-list text-start text-lg'
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <h4>
                <i className={item.icon}></i> {item.title}
              </h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <Link to='/signup'>
          <Button>Sign up</Button>
        </Link>
      </StyledWhyUs>
    );
  };
  return <LeftPoster img={whyus} left={true} Content={Content} />;
};

export default WhyUs;
