import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, id }) {
  return (
    <NavLink to={`/article/${id}`} className="nav-link">
      <div className="card">
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}
export default Card;
