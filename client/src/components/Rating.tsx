import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  value: number,
  text: string,
  color?: string
}

const Rating: React.FC<Props> = ({ value, text, color }) => {
  return (
    <>
      <span>
        <i style={{ color }} className={value >= 1 ? 'fas fa-star' : value === 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{ color }} className={value >= 2 ? 'fas fa-star' : value === 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{ color }} className={value >= 3 ? 'fas fa-star' : value === 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{ color }} className={value >= 4 ? 'fas fa-star' : value === 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{ color }} className={value === 5 ? 'fas fa-star' : value === 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span className="ml-2">{text && text}</span>
    </>
  );
};

Rating.defaultProps = {
  color: '#ffa500'
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Rating;
