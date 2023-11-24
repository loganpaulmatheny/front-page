import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, id, description, urlToImage, date }) {
  return (
    <NavLink to={`/article/${id}`} className="nav-link">
      <div className="card">
        <div className="title-block">
          <img
            className="square-image"
            src={`${urlToImage}`}
            alt={`${title}`}
          />
          <h3 className="article-title">{title}</h3>
        </div>
        <p className="card-published">Published: {date}</p>
        <p className="article-description">{description}</p>
      </div>
    </NavLink>
  );
}
export default Card;
