import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ItemDetail from "../components/ItemDetail";

const SmallItem = ({
  image,
  title,
  description,
  action,
  user,
  id,
  special = false,
}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <button
      className={`${
        special ? "itemButton flex left bgColor" : "itemButton flex left"
      }`}
      onClick={() => setModalShow(true)}
    >
      <Image src={image} alt={title} style={{ width: "20%" }} />
      <div className="padding8-8">
        <h6 className={`${special && "white"}`}>{title}</h6>
        <h6
          className={`${
            special ? "mediumText white margin0" : "mediumText margin0"
          }`}
        >
          {description}
        </h6>
        <small className={`${special ? "smallText white" : "smallText"}`}>
          {action}
          <Link
            className={`${special ? "white textDecoNone" : "smallText"}`}
            to="/"
          >
            {user}
          </Link>
        </small>
      </div>
      <ItemDetail
        modalShow={modalShow}
        setModalShow={setModalShow}
        itemID={id}
      />
    </button>
  );
};

export default SmallItem;
