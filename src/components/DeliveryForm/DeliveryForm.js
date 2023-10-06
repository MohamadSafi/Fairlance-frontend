import { useState, useContext } from 'react';
import { StyledDeliveryForm } from './style';
import axios from 'axios';
import Button from '../Button/Button';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const DeliveryForm = ({ project_id }) => {
  const [deliveredFile, setDeliveredFile] = useState(null);
  const { authToken } = useContext(AuthContext);

  const onDeliveredFileChange = (e) => {
    setDeliveredFile(e.target.files[0]);
  };

  const onDeliveredFileUpload = () => {
    console.log('Submitting');
    const reader = new FileReader();
    reader.readAsDataURL(deliveredFile);
    reader.onloadend = () => {
      const formData = new FormData();
      formData.append('submission', deliveredFile);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `token ${authToken}`,
        },
      };
      axios
        .put(`/api/projects/${project_id}/update/`, formData, config)
        .then((response) => {
          console.log(response);
        }).then(() => {
            toast(
              'Project submitted successfully!',
            );
          })
        .catch((error) => {
          console.log(error);
        });
    };
    reader.onerror = () => {
      console.error('AHHHHHHHH!!');
    };
  };

  return (
    <StyledDeliveryForm>
      <h1>Deliver This Project</h1>
      {/* <form onSubmit={onDeliveredFileUpload}> */}
      <div className='delivery-form'>
        <input type='file' onChange={onDeliveredFileChange} />
        <Button type='submit' onClick={onDeliveredFileUpload} primary={true}>
          Submit Project!
        </Button>
      </div>
      {/* </form> */}
    </StyledDeliveryForm>
  );
};

export default DeliveryForm;
