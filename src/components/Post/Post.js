import React, { useEffect } from 'react';
import Tags from '../Tags/Tags';
import { StyledPost } from './style';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import momnet from 'moment';

const Post = ({ post }) => {
  useEffect(() => {
    console.log(post);
  });
  return (
    <StyledPost>
      <div>
        <Link to={`/profile/${post.owner}`}>
          <h4>
            {post.first_name} {post.last_name}
          </h4>
        </Link>
        <div style={{ color: '#7b7b7b' }}>
          <i className='fa-regular fa-clock' style={{ padding: '0.4rem 0.4rem 0 0.4rem' }}></i>
          Deadline {momnet(post.deadline).fromNow()}
        </div>
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Tags tags={post.skills || []} />
      <div>
        <div className='price-range'>
          <div>{parseInt(post.price_min)} -</div>
          <div>{parseInt(post.price_max)}$</div>
        </div>
        <Link to={`/post/${post.id}`}>
          <Button>More Details</Button>
        </Link>
      </div>
    </StyledPost>
  );
};

export default Post;
