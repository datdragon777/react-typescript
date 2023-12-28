import React from 'react';
import './Error.css';
import { MESSAGES, BUTTON_VARIANTS } from '@constants';
import { Button } from '@components';

const Error = () => {
  const handleResetPage = () => {
    window.location.reload();
  };

  return (
    <div className='error'>
      <div className='error__container'>
        <p className='error__text'>{MESSAGES.CRASH_COMPONENT}</p>
        <Button
          btnName='Reset'
          variant={BUTTON_VARIANTS.SECONDARY}
          icon=''
          onClick={handleResetPage}
        />
      </div>
    </div>
  );
};

export default Error;
