import React from "react";
import "./Card.css";

const Card = (properties) => {
  return (
    <div className="card_body">
        <img className="card_img" src={properties.img}></img>
        <h1 className="card_title">{properties.title}</h1>
        <h2 className="card_description">{properties.description}</h2>
        <br />
        <a className="button_static" activeStyle={{ fontWeight: "bold" }} style={{ borderRadius: 5 }} href={properties.repo}>Github</a>
    </div>
  );
};

export default Card;