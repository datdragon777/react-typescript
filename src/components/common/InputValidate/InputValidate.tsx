import './InputValidate.css';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { INPUT_VARIANTS } from '@constants';
import { TInput } from '@types';

interface Props {
  label: string;
  type: TInput;
  value: string;
  errorMessage: string;
  genderType: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  checked: boolean;
}

const InputValidate: React.FC<Props> = (props) => {
  const {
    label,
    type = INPUT_VARIANTS.TEXT,
    value,
    errorMessage,
    genderType,
    onChange,
    onBlur,
    checked,
    ...inputProps
  } = props;

  const isRadioInput = type === INPUT_VARIANTS.RADIO;

  return (
    <div
      className={`form__input ${
        !isRadioInput ? 'form__input--field' : 'form__input--choose'
      }`}
    >
      {label && <label className='input__label'>{label}</label>}
      <input
        id={genderType}
        type={type}
        value={value}
        className={isRadioInput ? 'input__choose' : 'input__field'}
        onChange={onChange}
        checked={checked}
        onBlur={onBlur}
        {...inputProps}
      />
      {isRadioInput && (
        <label className='input__option' htmlFor={genderType}>
          {genderType}
        </label>
      )}
      {errorMessage && <span className='error__message'>{errorMessage}</span>}
    </div>
  );
};

InputValidate.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'radio']),
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genderType: PropTypes.string.isRequired,
};

export default memo(InputValidate);
