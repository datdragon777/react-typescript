import React, { memo } from 'react';
import './Contact.css';
import { ContactDetail } from '@components';
import PropTypes from 'prop-types';
import { email, phone, location } from '@assets/images';

interface Props {
  mail: string;
  phoneNumber: string;
  address: string;
}

const Contact: React.FC<Props> = ({ mail, phoneNumber, address }) => {
  return (
    <div className='contact'>
      <p className='contact__title'>Contact Info</p>
      <address className='contact__address'>
        <ContactDetail icon={email} info={mail} type='email' />
        <ContactDetail icon={phone} info={phoneNumber} type='phone' />
        <ContactDetail icon={location} info={address} type='address' />
      </address>
    </div>
  );
};

Contact.propTypes = {
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

Contact.defaultProps = {
  mail: 'decker_ultra1402@gmail.com',
  phoneNumber: '0785416985',
  address: '03 Ngo Tat To',
};

export default memo(Contact);
