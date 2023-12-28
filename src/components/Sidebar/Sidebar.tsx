import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Sidebar.css';
import { TagLink, Button, Account } from '@components';
import {
  logoBrand,
  lantern,
  lightLantern,
  logoutIcon,
  accountAvatar,
} from '@assets/images';
import { tagLinks } from '@mocks';
import { BUTTON_VARIANTS } from '@constants/buttons';

const Sidebar = () => {
  return (
    <aside className='left-sidebar'>
      <div className='sidebar__brand'>
        <a href='/' className='brand__link'>
          <div className='brand__logo'>
            <img
              src={logoBrand}
              alt='Wons-logo-brand'
              className='brand__img'
              width='44'
              height='28'
            />
          </div>
          <p className='brand__text'>Wons</p>
        </a>
      </div>
      <ul className='sidebar__list'>
        {tagLinks.map((tagLink) => {
          const { icon, name, path } = tagLink;
          const isAnalytics = name === 'Analytics';
          return (
            <li key={tagLink.id + tagLink.name} className={`sidebar__item`}>
              <TagLink
                icon={icon}
                name={name}
                path={path}
                isClick={isAnalytics}
              />
            </li>
          );
        })}
      </ul>

      <div className='sidebar__decoration'>
        <div className='decoration__img'>
          <img
            src={lantern}
            width='150'
            height='150'
            className='decoration__lantern'
            alt='lantern-decoration'
          />
          <img
            src={lightLantern}
            className='decoration__light-lantern'
            alt='lignt-lantern'
            width='127'
            height='43'
          />
        </div>
        <div className='decoration__wrapper'>
          <Button
            btnName='Update now'
            variant={BUTTON_VARIANTS.PRIMARY}
            icon=''
          />
        </div>
      </div>

      <Account
        username='Easin Arafat'
        avatar={accountAvatar}
        desc='Free Account'
        icon={logoutIcon}
      />
    </aside>
  );
};

Sidebar.propTypes = {};

export default memo(Sidebar);
