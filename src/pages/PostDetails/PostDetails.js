import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedPost from '../../components/DetailedPost/DetailedPost';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { StyledPostDetailsComponent } from './style';
import AuthContext from '../../context/AuthContext';
import Request from '../../utils/Request';

const PostDetailsPage = () => {
  const { authToken } = useContext(AuthContext);
  const { id } = useParams(); // Access the "id" parameter from the URL
  const [post, setPost] = useState();

  useEffect(() => {
    const retrieve = async () => {
      try {
        const res = await fetch(`/api/projects/${id}/`, Request('GET', '', authToken));
        const ret = await res.json();
        if (res.ok) {
          setPost(ret);
          console.log(ret);
        }
      } catch (_) {
        return;
      }
    };
    retrieve();
  }, [id, authToken]);

  return (
    <div>
      <NavBar />
      <StyledPostDetailsComponent>
        <DetailedPost post={post} />
      </StyledPostDetailsComponent>
      <Footer />
    </div>
  );
};

export default PostDetailsPage;
