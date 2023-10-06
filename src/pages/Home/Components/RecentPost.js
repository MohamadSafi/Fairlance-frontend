import React from 'react';
import Button from '../../../components/Button/Button';
import { StyledPost } from '../style';
import logo from '../../../assets/images/logo-new.png';
import { Link } from 'react-router-dom';

const RecentPost = ({ post, done }) => {
  return (
    <StyledPost>
      <div>
        <div>
          <h4>{post.title}</h4>
        </div>
        <div className='post-image'>
          <img srcSet={logo} alt='' />
        </div>
        <div className='post-paragraph'>
          <p>{post.description}</p>
        </div>
      </div>
      <div className='apply-info'>
        <p>
          {post.price_min}-{post.price_max}$
        </p>
        {done ? (
          <Button>More Details</Button>
        ) : (
          <Link to={`/post/${post.id}`}>
            <Button>Read More</Button>
          </Link>
        )}
      </div>
    </StyledPost>
  );
};

export default RecentPost;
