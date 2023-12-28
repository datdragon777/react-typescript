import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './TagLink.css';
import { PropTypes } from 'prop-types';
import { dashboard } from '@assets/images';

interface Props {
  icon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  name: string;
  path: string;
  isActive: boolean;
  isClick: boolean;
}

const TagLink: React.FC<Props> = ({ icon, name, path, isActive, isClick }) => {
  const linkClassName = isActive ? 'link__wrapper active' : 'link__wrapper';
  const pointerEventsStyle = !isClick ? 'none' : 'auto';
  return (
    <NavLink
      to={path}
      className={linkClassName}
      style={{ pointerEvents: pointerEventsStyle }}
    >
      <div className='link__icon'>
        <img
          className='icon__item'
          src={icon}
          width='24'
          height='24'
          alt={`${name}-icon`}
        />
      </div>
      <span className='link__name'>{name}</span>
    </NavLink>
  );
};

TagLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isClick: PropTypes.bool,
};

TagLink.defaultProps = {
  icon: dashboard,
  name: 'Default Link',
  path: '/',
  isActive: false,
  isClick: false,
};

export default memo(TagLink);
