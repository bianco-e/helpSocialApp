import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ItemDetail from "../components/ItemDetail";

const SmallItem = ({ image, title, description, user, urgent = false }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <button
      className={`${
        urgent ? "itemButton flex left bgColor" : "itemButton flex left"
      }`}
      onClick={() => setModalShow(true)}
    >
      <Image src={image} alt={title} style={{ width: "20%" }} />
      <div className="padding8-8">
        <h6 className={`${urgent && "white"}`}>{title}</h6>
        <h6
          className={`${
            urgent ? "mediumText white margin0" : "mediumText margin0"
          }`}
        >
          {description}
        </h6>
        <Link
          className={`${urgent ? "smallText white textDecoNone" : "smallText"}`}
          to="/"
        >
          {user}
        </Link>
      </div>
      <ItemDetail
        modalShow={modalShow}
        setModalShow={setModalShow}
        itemTitle={title}
      />
    </button>
  );
};

export default SmallItem;
