import React, { memo } from "react";
import PropTypes from "prop-types";
import { accountAvatar, logoutIcon } from "@assets/images";
import "./Account.css";

interface Props {
  username: string;
  avatar: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  desc: string;
  icon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}

const Account: React.FC<Props> = ({ username, avatar, desc, icon }) => {
  return (
    <div className="account">
      <div className="account__avatar">
        <img
          className="avatar__img"
          src={avatar}
          width="45"
          height="45"
          alt="account-avatar"
        />
      </div>
      <div className="account__info">
        <p className="account__name">{username}</p>
        <p className="account__desc">{desc}</p>
      </div>
      <div className="account__icon">
        <img
          className="icon__logout"
          src={icon}
          width="18"
          height="18"
          alt="logout-icon"
        />
      </div>
    </div>
  );
};

Account.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Account.defaultProps = {
  username: "Easin Arafat",
  avatar: logoutIcon,
  desc: "Free Account",
  icon: accountAvatar,
};

export default memo(Account);
