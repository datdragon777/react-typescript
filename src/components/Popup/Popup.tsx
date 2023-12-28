import React, { memo } from 'react';
import './Popup.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';
import PropTypes from 'prop-types';

interface Props {
  popupText: string;
  onTogglePopup: () => void;
  onConfirm: () => void;
}

const Popup: React.FC<Props> = ({ popupText, onTogglePopup, onConfirm }) => {
  return (
    <div className='confirm__popup'>
      <div className='confirm__content'>
        <p className='confirm__title'>{popupText}</p>
        <div className='confirm__btn'>
          <Button
            btnName={'Cancel'}
            variant={BUTTON_VARIANTS.TOGGLE}
            onClick={onTogglePopup}
            icon=''
          />
          <Button
            btnName='Delete'
            variant={BUTTON_VARIANTS.SECONDARY}
            onClick={onConfirm}
            icon=''
          />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  popupText: PropTypes.string.isRequired,
  onTogglePopup: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  popupText: 'Are you sure to delete customer',
  onTogglePopup: () => {},
  onConfirm: () => {},
};

export default memo(Popup);
