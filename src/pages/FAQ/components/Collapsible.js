import React, { useRef, useState } from 'react';
import { StyledCollapsible } from '../style';

const Collapsible = ({ children, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapse = useRef();

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      collapse.current.style.transform = 'rotate(' + 180 + 'deg)';
    } else {
      collapse.current.style.transform = 'rotate(' + -180 + 'deg)';
    }
  };
  return (
    <StyledCollapsible onClick={toggleCollapse}>
      <div className='shown'>
        <h4>{title}</h4>
        <div ref={collapse}>
          <i className='fa-solid fa-chevron-down'></i>
        </div>
      </div>
      {isExpanded && <div className='hidden'>{children}</div>}
    </StyledCollapsible>
  );
};

export default Collapsible;
