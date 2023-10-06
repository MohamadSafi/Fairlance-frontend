import React, { useContext, useState } from 'react';
import { CreatePostStyled, StyledProgress } from './style';
import NavBar from '../../components/NavBar/NavBar';
import TitleForm from './componenets/TitleForm';
import DetailsForm from './componenets/DetailsForm';
import MediaForm from './componenets/MediaForm';
import PricingForm from './componenets/PricingForm';
import FinalPreview from './componenets/FinalPreview';
import IntroForm from './componenets/IntroForm';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TAGS_URL = 'http://localhost:3030/tags';

const CreatePost = () => {
  const { authToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [range, setRange] = useState([]);
  const [title, setTitle] = useState('');
  const [formIdx, setFormIdx] = useState(0);
  const [category, setCategory] = useState({
    it: false,
    design: false,
    marketing: false,
    sales: false,
    writing: false,
  });
  const [deadline, setDeadline] = useState(new Date());
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const clickedOption = (name) => {
    const tmp = category;
    for (let key in category) {
      tmp[key] = false;
    }
    tmp[name] = true;
    setCategory({ ...tmp });
  };
  const nextForm = (e) => {
    setFormIdx(formIdx + 1);
    for (let i = 1; i <= formIdx + 1; i++) {
      const prog = document.querySelector(`#elements :nth-child(${i})`);
      if (!prog) continue;
      if (!prog.classList.contains('active-border')) {
        prog.classList.add('active-border');
      }
    }
    e.preventDefault();
  };
  const prevForm = (e) => {
    setFormIdx(formIdx - 1);
    for (let i = 1; i <= formIdx + 1; i++) {
      const prog = document.querySelector(`#elements :nth-child(${i})`);
      if (!prog) continue;
      if (prog.classList.contains('active-border')) {
        prog.classList.remove('active-border');
      }
      if (!prog.classList.contains('active-border') && i < formIdx) {
        prog.classList.add('active-border');
      }
    }
    e.preventDefault();
  };
  const addFile = (file) => {
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tags_req = [];
    for (let i = 0; i < tags.length; i++) {
      tags_req.push({ skill_id: tags[i].value });
    }
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `token ${authToken}`,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        deadline: deadline,
        price_min: range[0],
        price_max: range[1],
        skills: tags_req,
      }),
    };
    try {
      const res = await fetch('/api/projects/add/', req);
      const ret = await res.json();
      navigate(`/post/${ret.project_id}`);
      toast('post created successfully');
    } catch (e) {
      toast.error('something went wrong please recheck');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar notfixed={true} />
      <CreatePostStyled>
        <StyledProgress>
          <div id='elements'>
            <div>Title</div>
            <div>Description</div>
            <div>Media & Tags</div>
            <div>Pricing</div>
            <div>Final Preview</div>
          </div>
        </StyledProgress>
        <div>
          {formIdx === 0 ? <IntroForm nextForm={nextForm} /> : ''}
          {formIdx === 1 ? (
            <TitleForm
              category={category}
              clickedOption={clickedOption}
              title={title}
              setTitle={setTitle}
              nextForm={nextForm}
            />
          ) : (
            ''
          )}
          {formIdx === 2 ? (
            <DetailsForm
              nextForm={nextForm}
              prevForm={prevForm}
              description={description}
              setDescription={setDescription}
            />
          ) : (
            ''
          )}
          {formIdx === 3 ? (
            <MediaForm
              nextForm={nextForm}
              prevForm={prevForm}
              addFile={addFile}
              TAGS_URL={TAGS_URL}
              tags={tags}
              setTags={setTags}
            />
          ) : (
            ''
          )}
          {formIdx === 4 ? (
            <PricingForm
              nextForm={nextForm}
              prevForm={prevForm}
              range={range}
              setRange={setRange}
              deadline={deadline}
              setDeadline={setDeadline}
            />
          ) : (
            ''
          )}
          {formIdx === 5 ? (
            <FinalPreview
              category={category}
              handleSubmit={handleSubmit}
              prevForm={prevForm}
              title={title}
              tags={tags}
              body={description}
              range={range}
              deadline={deadline}
            />
          ) : (
            ''
          )}
        </div>
      </CreatePostStyled>
    </div>
  );
};

export default CreatePost;
