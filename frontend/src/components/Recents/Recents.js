import React, { useContext, useEffect, useState } from 'react';
import HorizontalBlogs from '../HorizontalBlogs/HorizontalBlogs';

const Recents = ({ done }) => {
  const [posts, setPosts] = useState([]);
  const [postIdx, setPostIdx] = useState(0);

  useEffect(() => {
    let posts = JSON.parse(localStorage.getItem('jobs')).map((value, idx, _) => JSON.parse(value));
    setPosts([posts[0], posts[1], posts[2]]);
  }, [setPosts]);

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
