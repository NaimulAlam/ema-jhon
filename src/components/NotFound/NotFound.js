import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-details">
        <h1>
          Page Not Found <span style={{ color: "red" }}>404</span>
        </h1>
        <p>The page you are looking for, it's not available. </p>
        <Link to="/">
          <button className="not-found-btn">Go back to the homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
