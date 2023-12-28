import React, { memo } from "react";
import PropTypes from "prop-types";
import "./ContactDetail.css";
import { email } from "@assets/images";

interface Props {
  icon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  info: string;
  type: string;
}

const ContactDetail: React.FC<Props> = ({ icon, info, type }) => {
  let hrefValue = "";

  if (type === "address") {
    hrefValue = `https://maps.google.com/?q=${info}`;
  } else if (type === "phone") {
    hrefValue = `tel:${info}`;
  } else if (type === "email") {
    hrefValue = `mailto:${info}`;
  }

  return (
    <div className="contact-detail">
      <div className="contact-detail__icon">
        <img
          className="icon__info"
          src={icon}
          width="16"
          height="15"
          alt="icon-info"
        />
      </div>
      <a
        className="contact-detail__info"
        href={hrefValue}
        target="_blank"
        rel="noreferrer"
      >
        {info}
      </a>
    </div>
  );
};

ContactDetail.propTypes = {
  icon: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "phone", "address"]).isRequired,
};

ContactDetail.defaultProps = {
  icon: email,
  info: "decker_ultra17@ultraman.com",
  type: "email",
};

export default memo(ContactDetail);
