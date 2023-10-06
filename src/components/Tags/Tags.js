import React, { useEffect } from 'react';
import { Tag } from './style.js';

const Tags = ({ tags }) => {
  useEffect(() => {
    console.log(tags);
  });
  return (
    <Tag className='tags'>
      {tags.map((tag, idx) => {
        return (
          <div key={idx}>
            <span>#</span> {tag.skill_name}
          </div>
        );
      })}
    </Tag>
  );
};

export default Tags;
