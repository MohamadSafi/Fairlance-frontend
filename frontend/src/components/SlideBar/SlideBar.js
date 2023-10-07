import React from 'react';
import { Range, getTrackBackground } from 'react-range';

const SlideBar = ({ rtl, MAX, MIN, STEP, setValues, values, oneSided }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '80%',
              marginTop: '0.5rem',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#1E88E5', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '15px',
              width: '15px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: oneSided && index === 1 ? 'none' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                height: '7px',
                width: '3px',
                backgroundColor: isDragged ? '#1E88E5' : '#CCC',
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default SlideBar;
