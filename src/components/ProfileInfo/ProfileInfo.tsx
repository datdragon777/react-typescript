import React, { memo } from 'react';
import './ProfileInfo.css';
import PropTypes from 'prop-types';
import { Info, Contact } from '@components';
import { infoAvatar } from '@assets/images';
import { ICustomer } from '@types';

interface Props {
  selectedCustomer: ICustomer
}

const ProfileInfo: React.FC<Props> = ({ selectedCustomer }) => {
  const { name, avatar, mail, description, phoneNumber, address } =
    selectedCustomer;
  return (
    <div className='profile-info'>
      <Info avatar={avatar} name={name} job={description} />
      <Contact mail={mail} phoneNumber={phoneNumber} address={address} />
    </div>
  );
};

ProfileInfo.propTypes = {
  selectedCustomer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

ProfileInfo.defaultProps = {
  selectedCustomer: {
    name: 'Jack the Ripper',
    avatar: infoAvatar,
    mail: 'madmanin1800s@gmail.com',
    description: 'Assassin',
    phoneNumber: '01478542364',
    address: '01 Phan Huy Ich',
  },
};

export default memo(ProfileInfo);
