import React, { useContext, useEffect, useState } from 'react';
import HorizontalBlogs from '../HorizontalBlogs/HorizontalBlogs';
import AuthContext from '../../context/AuthContext';

const Recents = ({ done }) => {
  const [posts, setPosts] = useState([]);
  const [postIdx, setPostIdx] = useState(0);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `token ${authToken}`,
        'ngrok-skip-browser-warning': 'true',
      },
    };
    fetch('/api/projects/recent/', req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        for (let i = 0; i < 3; i++) {
          setPosts([]);
        }
        console.log(error);
      });
  }, [setPosts, authToken]);

  const previousPost = () => {
    if (postIdx > 0) {
      setPostIdx(postIdx - 1);
    }
  };
  const nextPost = () => {
    if (postIdx + 3 < posts.length) {
      setPostIdx(postIdx + 1);
    }
  };

  return (
    <HorizontalBlogs
      posts={posts}
      postIdx={postIdx}
      nextPost={nextPost}
      previousPost={previousPost}
      done={done}
    />
  );
};

export default Recents;
