import React, { useContext, useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import { FileUploader } from 'react-drag-drop-files';
import Select from 'react-select';
import AuthContext from '../../../context/AuthContext';

const fileTypes = ['JPEG', 'PNG', 'GIF'];

const MediaForm = ({ nextForm, prevForm, tags, setTags }) => {
  const [suggestions, setSuggestions] = useState([]);
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
    fetch('/api/skills', req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let tags = [];
        for (let i = 0; i < data.length; i++) {
          let tag = {};
          tag.value = data[i].skill_id;
          tag.label = data[i].skill_name;
          tags.push(tag);
        }
        setSuggestions(tags);
      })
      .catch(() => {
        for (let i = 0; i < 3; i++) {
          setSuggestions([]);
        }
      });
  }, [setSuggestions, authToken]);

  const [file, setFile] = useState(null);
  const handleChange = (f) => {
    setFile(f);
  };
  return (
    <form>
      <h2>Media & Tags</h2>
      <label htmlFor='tags-list'>Add some tags related to your job</label>
      <div style={{ marginBottom: '1rem' }}>
        <Select
          options={suggestions}
          className='select-panel'
          name='tags-list'
          isMulti
          value={tags}
          onChange={(value) => setTags(value)}
        />
      </div>
      <label htmlFor='files'>Upload extra files</label>
      <p>Here, you can upload files that are needed to describe more details.</p>
      <div className='file-upload'>
        <FileUploader multiple={true} handleChange={handleChange} name='file' types={fileTypes} />
        <p>
          {file ? `File name: ${Array.from(file).map((f) => f.name)}` : 'no files uploaded yet'}
        </p>
      </div>
      <div className='next-page'>
        <Button onClick={prevForm}>Previous Page</Button>
        <Button primary={true} onClick={nextForm}>
          Next page
        </Button>
      </div>
    </form>
  );
};

export default MediaForm;
