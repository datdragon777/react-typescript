import React, { memo } from 'react';
import './Loading.css';
import { loadingData } from '@assets/images';

const Loading = () => {
  return (
    <div className='customer__loading'>
      <img
        src={loadingData}
        className='loading__scene'
        alt='loading-data...'
        width='200px'
        height='200px'
      />
    </div>
  );
};

export default memo(Loading);
