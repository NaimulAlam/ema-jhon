import React from "react";
import "./ReviewProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewProducts = ({ product, handleRemoveProduct }) => {
  const { id, name, price, quantity, img, shipping } = product;

  return (
    <div className="review-products">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-btn-container">
          <button
            onClick={() => handleRemoveProduct(id)}
            className="delete-btn"
          >
            <FontAwesomeIcon icon={faTrashCan} className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
