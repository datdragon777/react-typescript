import React, { memo } from "react";
import PropTypes from "prop-types";
import "./CustomerInfo.css";
import { accountAvatar } from "@assets/images";

interface Props {
  avatar: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  name: string;
}

const CustomerInfo: React.FC<Props> = ({ avatar, name }) => {
  return (
    <div className="customer__wrapper col-3 col-md-3">
      <div className="customer__avatar">
        <img
          className="customer__img"
          src={avatar}
          width="30"
          height="30"
          alt={`${name}-avatar`}
        />
      </div>
      <p className="customer__name">{name}</p>
    </div>
  );
};

CustomerInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

CustomerInfo.defaultProps = {
  avatar: accountAvatar,
  name: "Openheimer",
};

export default memo(CustomerInfo);
