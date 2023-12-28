import { memo } from 'react';
import './Toast.css';
import PropTypes from 'prop-types';
import { MESSAGES, TOAST_TYPES } from '@constants';
import { toastTheme } from '@themes';

interface Props {
  message: string;
  type: string;
}

const Toast: React.FC<Props> = ({ message, type }) => {
  const isFailType = type === TOAST_TYPES.FAIL;

  return (
    <div
      style={{
        backgroundColor: isFailType ? toastTheme.error : toastTheme.success,
      }}
      className={`toast__container`}
    >
      <p className='toast__message'>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Toast.defaultProps = {
  message: MESSAGES.ADD.SUCCESS,
  type: TOAST_TYPES.SUCCESS,
};

export default memo(Toast);
