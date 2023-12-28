import React, { memo } from 'react';
import './Gender.css';
import PropTypes from 'prop-types';

interface Props {
  gender: string;
}

const Gender: React.FC<Props> = ({ gender }) => {
  const genderStyle = `gender__wrapper gender__wrapper--${gender.toLowerCase()}`;

  return <p className={genderStyle}>{gender}</p>;
};

Gender.propTypes = {
  gender: PropTypes.string.isRequired,
};

Gender.defaultProps = {
  gender: 'Male',
};

export default memo(Gender);
