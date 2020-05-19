import React from "react";
import { Link, useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";

const SmallItem = ({
  image,
  title,
  description,
  user,
  id,
  urgent = false,
  collection,
}) => {
  const history = useHistory();
  return (
    <button
      className={`${
        urgent ? "itemButton flex left bgColor" : "itemButton flex left"
      }`}
      onClick={() => {
        history.push(`/${collection}/${id}`);
      }}
    >
      <Image src={image} alt={title} style={{ width: "100px" }} />
      <div className="padding8-8">
        <h6 className={`${urgent && "white"}`}>{title}</h6>
        <h6
          className={`${
            urgent ? "mediumText white margin0" : "mediumText margin0"
          }`}
        >
          {description}
        </h6>
        <small
          className={`${urgent ? "mediumText white" : "mediumText text-muted"}`}
        >
          {user}
        </small>
      </div>
    </button>
  );
};

export default SmallItem;
