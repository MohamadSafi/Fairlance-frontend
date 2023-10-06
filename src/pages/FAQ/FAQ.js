import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import logo from '../../assets/images/logo-new.png';
import { StyledFAQ, StyledQuestionsBlock } from './style';
import Collapsible from './components/Collapsible';

const FAQ = () => {
  return (
    <StyledFAQ>
      <NavBar notfixed={true}></NavBar>
      <div className='container'>
        <header>
          <img srcSet={logo} alt='' />
          <h1>How can we help you?</h1>
        </header>
        <h3>Please check our FAQ list:</h3>
        <StyledQuestionsBlock>
          <Collapsible title='Is it necessary for freelancers to have prior experience with cryptocurrencies?'>
            While it can be advantageous to have some familiarity with cryptocurrencies, it is not a
            requirement. The website provides user-friendly interfaces and guides to help
            freelancers navigate the process of receiving and managing cryptocurrency payments.
          </Collapsible>
          <Collapsible title='How does the freelancing website utilize cryptocurrencies?'>
            Our freelancing website integrates cryptocurrencies as a form of payment for
            freelancers. It allows clients to pay for services using various cryptocurrencies,
            providing an alternative and secure payment method.
          </Collapsible>
          <Collapsible title='Which cryptocurrencies are accepted on the platform?'>
            Currently we support Ethereum (ETH) only. We plan to extend the accepted
            cryptocurrencies
          </Collapsible>
          <Collapsible title='Are there any limitations on the types of freelancing services offered on the platform?'>
            No, Our platform supports a wide range of freelancing services across various
            industries. From graphic design and programming to writing and marketing, freelancers
            from diverse fields can find opportunities that match their expertise.
          </Collapsible>
          <Collapsible title='How can freelancers get started on the platform?'>
            Freelancers can sign up for an account on our website and create a compelling profile
            showcasing their skills and experience. Once approved, they can start browsing available
            projects, submitting proposals, and connecting with potential clients.
          </Collapsible>
          <Collapsible title="How does the website increase freelancers' profits?">
            Our platform streamlines the payment process and eliminates intermediaries, reducing
            transaction fees. By leveraging cryptocurrencies, freelancers can enjoy lower fees and
            faster transactions, resulting in increased overall profits.
          </Collapsible>
        </StyledQuestionsBlock>
      </div>
    </StyledFAQ>
  );
};

export default FAQ;
