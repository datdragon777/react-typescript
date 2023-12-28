import React, { memo } from 'react';
import './ContextMenu.css';
import { Button } from '@components';
import { BUTTON_VARIANTS } from '@constants/buttons';
import { editIcon, deleteIcon } from '@assets/images';

interface Props {
  onToggleForm: React.MouseEventHandler;
  onToggleDeletePopup: React.MouseEventHandler;
}

const ContextMenu: React.FC<Props> = ({ onToggleForm, onToggleDeletePopup }) => {
  return (
    <div className='context-menu'>
      <Button
        btnName='Edit'
        variant={BUTTON_VARIANTS.EDIT}
        icon={editIcon}
        onClick={onToggleForm}
      />
      <Button
        btnName='Delete'
        variant={BUTTON_VARIANTS.DELETE}
        icon={deleteIcon}
        onClick={onToggleDeletePopup}
      />
    </div>
  );
};

export default memo(ContextMenu);
