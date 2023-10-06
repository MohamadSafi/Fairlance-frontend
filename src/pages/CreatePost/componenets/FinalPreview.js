import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import Tags from '../../../components/Tags/Tags';

const FinalPreview = ({ handleSubmit, prevForm, title, body, tags, range, deadline, category }) => {
  const [complete, setComplete] = useState(false);
  const [missing, setMissing] = useState([]);
  const [jobCategory, setJobCategory] = useState();
  const categoryName = {
    it: 'Development & IT',
    design: 'Design',
    sales: 'Sales',
    marketing: 'Marketing',
    writing: 'Writing',
  };
  useEffect(() => {
    let missingItems = [];
    if (!title) {
      missingItems.push('Please add a title to your post');
    }
    if (!body) {
      missingItems.push('Please add a description to your post');
    }
    if (!range || parseInt(range[0]) > parseInt(range[1])) {
      missingItems.push('Please add valid price to your post');
    }
    if (deadline < new Date()) {
      missingItems.push('Please specify a valid deadline for your job');
    }
    let ok = false;
    for (let element in category) {
      if (category[element]) {
        ok = true;
        setJobCategory(element);
      }
    }
    if (!ok) {
      missingItems.push('Please set a job category');
    }
    if (missingItems.length === 0) {
      setComplete(true);
    }
    setMissing(missingItems);
  }, [body, category, deadline, range, title]);

  const transfer = (tags) => {
    let ret = [];
    for (let key in tags) {
      ret.push({ skill_name: tags[key].label });
    }
    return ret;
  };

  return (
    <>
      {complete ? (
        <form className='final-preview'>
          <h2>Final Preview</h2>
          <h3>{title}</h3>
          <span>{categoryName[jobCategory]}</span>
          <p>{body}</p>
          <div className='no-edit'>
            <Tags tags={transfer(tags)} />
          </div>
          <div className='price-range'>
            <div>
              <span style={{ fontWeight: 'bold' }}>price:</span> {range[0]} to {range[1]}
            </div>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Deadline:</span> {deadline.toString()}
          </div>
          <div className='next-page'>
            <Button primary={false} onClick={prevForm}>
              Previous page
            </Button>
            <Button primary={true} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      ) : (
        <>
          <form>
            <h2 style={{ color: 'red' }}>Please fill the following missed fields:</h2>
            {missing.map((e) => (
              <p>{e}</p>
            ))}
            <div className='next-page'>
              <Button primary={false} onClick={prevForm}>
                Previous page
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default FinalPreview;
