import React, { memo } from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import { GetButtonVariant } from '@helpers';
import { BUTTON_VARIANTS } from '@constants';
import { plusIcon } from '@assets/images';
import { TButton } from '@types';

interface Props {
  btnName: string;
  variant: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  onClick: React.MouseEventHandler;
  type: TButton;
  disabled: boolean;
}

const Button: React.FC<Props> = ({
  btnName,
  variant = BUTTON_VARIANTS.PRIMARY,
  icon,
  onClick,
  type = 'button',
  disabled,
}) => {
  const buttonVariant = GetButtonVariant(variant);

  return (
    <button
      type={type}
      style={buttonVariant}
      onClick={onClick}
      className={`btn ${
        variant === BUTTON_VARIANTS.PRIMARY ||
        variant === BUTTON_VARIANTS.DELETE ||
        variant === BUTTON_VARIANTS.TOGGLE
          ? 'btn__female'
          : 'btn__male'
      }`}
      disabled={disabled}
    >
      {icon && (
        <div className='btn__icon'>
          <img
            className='icon__bonus'
            alt={`${btnName}-icon`}
            width='10'
            height='10'
            src={icon}
          />
        </div>
      )}
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]) as PropTypes.Requireable<TButton>,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  btnName: 'Update now',
  variant: 'primary',
  icon: plusIcon,
  onClick: () => {},
  type: 'button',
  disabled: false,
};

export default memo(Button);
