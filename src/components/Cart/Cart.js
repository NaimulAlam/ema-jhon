import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, clearCart, children }) => {
  // const { id, price, shipping } = cart;

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat(total * 0.1).toFixed(2);
  const grandTotal = (
    parseFloat(total) +
    parseFloat(shipping) +
    parseFloat(tax)
  ).toFixed(2);

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <div>
        {cart.map((pd) => (
          <div className="cart-item" key={pd.id}>
            <img src={pd.img} alt="" />
            <div>
              <h5>Name: {pd.name}</h5>
              <div className="cart-details-div">
                <p>${pd.price}</p>
                <div className="cart-delete-btn-container">
                  <button
                    onClick={() => console.log("btnClicked")}
                    className="cart-delete-btn"
                  >
                    <FontAwesomeIcon icon={faX} className="cart-delete-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Shipping Cost: ${shipping.toFixed(2)} </p>
      <p>Tax: ${tax} </p>
      <h5>Grand Total: ${grandTotal}</h5>
      <div>
        {grandTotal > 0 && (
          <button className="clear-cart-btn" onClick={() => clearCart()}>
            Clear Cart
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Cart;
