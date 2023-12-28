import React, { memo, useCallback } from 'react';
import './CustomerItem.css';
import { PropTypes } from 'prop-types';
import { CustomerInfo, Gender, ContextMenu } from '@components';
import { menuDot, infoAvatar } from '@assets/images';
import { ICustomer } from '@types';

interface Props {
  customer: ICustomer;
  selectedCustomer: ICustomer;
  isShowContextMenu: boolean;
  onShowContextMenu: (e: React.MouseEvent<HTMLDivElement>, customer: ICustomer) => void;
  onShowProfileInfo: (customer: ICustomer) => void;
  onToggleForm: React.MouseEventHandler;
  onToggleDeletePopup: React.MouseEventHandler;
}

const CustomerItem: React.FC<Props> = ({
  customer,
  selectedCustomer,
  isShowContextMenu,
  onShowContextMenu,
  onShowProfileInfo,
  onToggleForm,
  onToggleDeletePopup,
}) => {
  
  const handleClickProfileInfo = useCallback(() => {
    onShowProfileInfo(customer)
  }, [customer, onShowProfileInfo])

  const handleClickContextMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement> ) => {
      onShowContextMenu(e, customer);
    },
    [onShowContextMenu, customer]
  );                                                                                                                                                                      

  return (
    <li className='customer__item' onClick={handleClickProfileInfo}>
      <CustomerInfo avatar={customer.avatar} name={customer.name} />
      <div className='col-3 col-md-3 customer__align'>
        <p className='customer__text'>{customer.mail}</p>
      </div>
      <div className='col-3 col-md-3 customer__align'>
        <p className='customer__text'>{customer.phoneNumber}</p>
      </div>
      <div className='col-3 col-md-3 customer__last'>
        <Gender gender={customer.gender} />
        <div className='customer__option' onClick={handleClickContextMenu}>
          <img src={menuDot} width='14' height='4' alt='dot icon' />
          <div className='customer__context-menu'>
            {selectedCustomer?.id === customer.id && isShowContextMenu && (
              <ContextMenu
                onToggleForm={onToggleForm}
                onToggleDeletePopup={onToggleDeletePopup}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
};

CustomerItem.defaultProps = {
  customer: {
    avatar: infoAvatar,
    name: 'Chrodinger Openheimer',
    mail: 'Nuclear_weapon@destroy.com',
    phoneNumber: '0563489512',
    gender: 'Male',
  },
};

export default memo(CustomerItem);
