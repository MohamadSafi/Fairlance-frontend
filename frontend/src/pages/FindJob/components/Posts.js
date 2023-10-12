import React, { useContext, useEffect, useState } from 'react';
import Post from '../../../components/Post/Post';
import { StyledPosts } from '../styles';
import AuthContext from '../../../context/AuthContext';
import { List } from 'react-content-loader';

const Posts = () => {
  const { authToken } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      let posts = JSON.parse(localStorage.getItem('jobs')).map((value, idx, _) =>
        JSON.parse(value),
      );
      setPosts(posts);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    };
    setLoading(true);
    load();
  }, [setPosts]);

  return (
    <StyledPosts>
      {posts.length > 0 ? (
        posts.map((post, idx) => {
          return <Post post={post} key={idx}></Post>;
        })
      ) : (
        <>
          {loading ? (
            <div className='loading-container'>
              <List className='loading' />
              <div className='seperate' style={{ margin: '2rem 0', width: '100%' }}></div>
              <List className='loading' />
              <div className='seperate' style={{ margin: '2rem 0', width: '100%' }}></div>
              <List className='loading' />
            </div>
          ) : (
            <div style={{ padding: '1rem' }}>There are not posts yet</div>
          )}
        </>
      )}
    </StyledPosts>
  );
};

export default Posts;
