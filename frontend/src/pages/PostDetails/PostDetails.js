import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedPost from '../../components/DetailedPost/DetailedPost';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { StyledPostDetailsComponent } from './style';
import AuthContext from '../../context/AuthContext';
import Request from '../../utils/Request';
import { ParamType } from 'ethers/lib/utils';

const PostDetailsPage = () => {
  const { id } = useParams(); // Access the "id" parameter from the URL
  const [post, setPost] = useState();

  useEffect(() => {
    const retrieve = async () => {
      try {
        let ret = JSON.parse(localStorage.getItem('jobs')).filter(item => {
          const parsed = JSON.parse(item);

          return parsed.id === parseInt(id);
        });
        ret = JSON.parse(ret);
        setPost(ret);
        console.log(ret);
      } catch (_) {
        return;
      }
    };
    retrieve();
  }, [id]);

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
