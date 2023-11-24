import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, id, description }) {
  return (
    <NavLink to={`/article/${id}`} className="nav-link">
      <div className="card">
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
      </div>
    </NavLink>
  );
}
export default Card;
