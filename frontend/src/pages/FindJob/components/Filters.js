import React, { useState } from 'react';
import RadioButton from '../../../components/RadioButton/RadioButton';
import SlideBar from '../../../components/SlideBar/SlideBar';
import Select from 'react-select';
import { StyledFilters } from '../styles.js';

const Filters = () => {
  const [category, setCategory] = useState({
    it: false,
    design: false,
    marketing: false,
    sales: false,
    writing: false,
  });

  const clickedOption = (name) => {
    const tmp = category;
    for (let key in category) {
      tmp[key] = false;
    }
    tmp[name] = true;
    setCategory({ ...tmp });
  };

  const MIN = 5,
    MAX = 2000,
    STEP = 5;

  const [range, setRange] = useState([MIN, MAX]);
  const [ratingRange, setRatingRange] = useState([0, 5]);

  const changeRange = (range) => {
    setRange(range);
    if (range[0] < 0) setRange([0, range[1]]);
    if (range[1] < 0) setRange([range[0], 0]);
    if (range[0] > MAX) setRange([MAX, range[1]]);
    if (range[1] > MAX) setRange([range[0], MAX]);
  };
  const changeRatingRange = (range) => {
    setRatingRange(range);
    if (range[0] < 0) setRatingRange([0, range[1]]);
    if (range[1] < 0) setRatingRange([range[0], 0]);
    if (range[0] > 5) setRatingRange([5, range[1]]);
    if (range[1] > 5) setRatingRange([range[0], 5]);
  };

  const timePeriods = [
    { value: 'any', label: 'Any period' },
    { value: 'hour', label: 'One hour' },
    { value: 'six-hours', label: 'Less than six hours' },
    { value: 'day', label: 'One day' },
    { value: 'two-days', label: 'Two days' },
    { value: 'week', label: 'One week' },
    { value: 'more', label: 'More than one week' },
  ];

  return (
    <StyledFilters>
      <div>
        <h4>Categories:</h4>
        <RadioButton
          id='it'
          name='it'
          value='Development & IT'
          text='Development & IT'
          onChange={clickedOption}
          checked={category.it}
        />
        <RadioButton
          id='design'
          name='design'
          value='Design'
          text='Design'
          onChange={clickedOption}
          checked={category.design}
        />
        <RadioButton
          id='sales'
          name='sales'
          value='Sales'
          text='Sales'
          onChange={clickedOption}
          checked={category.sales}
        />
        <RadioButton
          id='marketing'
          name='marketing'
          value='Marketing'
          text='Marketing'
          onChange={clickedOption}
          checked={category.marketing}
        />
        <RadioButton
          id='writing'
          name='writing'
          value='Writing'
          text='Writing'
          onChange={clickedOption}
          checked={category.writing}
        />
      </div>
      <div>
        <h4>Budget:</h4>
        select fixed budget
        <SlideBar
          rtl={false}
          MAX={MAX}
          MIN={MIN}
          STEP={STEP}
          setValues={changeRange}
          values={range}
        />
        <div className='range-values'>
          <input
            type='number'
            value={range[0]}
            onChange={(e) => changeRange([e.target.value, range[1]])}
            onFocus={(e) => {
              e.target.value = '';
            }}
            onBlur={(e) => {
              e.target.value = range[0].toString();
            }}
          />
          <input
            type='number'
            value={range[1]}
            onChange={(e) => changeRange([range[0], e.target.value])}
            onFocus={(e) => {
              e.target.value = '';
            }}
            onBlur={(e) => {
              e.target.value = range[1].toString();
            }}
          />
        </div>
      </div>
      <div>
        <h4>Time:</h4>
        <p style={{ marginBottom: '0.5rem' }}>select time period</p>
        <Select options={timePeriods} defaultValue={timePeriods[0]} />
      </div>
      <div>
        <h4>Rating:</h4>
        select the minimum rating of employer
        <SlideBar
          rtl={false}
          MIN={0}
          MAX={5}
          STEP={0.1}
          oneSided={true}
          setValues={changeRatingRange}
          values={ratingRange}
        />
        <div className='rating-filter'>
          <input
            type='number'
            value={ratingRange[0]}
            onChange={(e) => setRatingRange([ratingRange[0], e.target.value])}
            onFocus={(e) => {
              e.target.value = '';
            }}
            onBlur={(e) => {
              e.target.value = ratingRange[0].toString();
            }}
          />
        </div>
      </div>
    </StyledFilters>
  );
};

export default Filters;
