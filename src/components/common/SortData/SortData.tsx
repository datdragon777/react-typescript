import React, { useState, memo } from "react";
import "./SortData.css";
import { arrowDown } from "@assets/images";
import PropTypes from "prop-types";

interface Props {
  name: string;
}

const SortData: React.FC<Props> = ({ name }) => {
  const [isSorted, setIsSorted] = useState(false);

  const handleToggleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div
      className={`sort__wrapper ${isSorted ? "sorted" : ""}`}
      onClick={handleToggleSort}
    >
      <p className="sort__name">{name}</p>
      <div className={`sort__icon ${isSorted ? "sorted" : ""}`}>
        <img
          src={arrowDown}
          className={`icon__sort ${isSorted ? "sorted" : ""}`}
          width="6"
          height="6"
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

SortData.propTypes = {
  name: PropTypes.string.isRequired,
};

SortData.defaultProps = {
  name: "Email",
};

export default memo(SortData);
