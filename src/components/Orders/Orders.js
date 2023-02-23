import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

function Orders() {
  const { previousCart } = useLoaderData();
  // create a state so we can remove items from the cart
  const [cart, setCart] = useState(previousCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveProduct = (productId) => {
    const remainingProducts = cart.filter(
      (product) => product.id !== productId
    );
    setCart(remainingProducts);
    removeFromDb(productId);
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewProducts
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewProducts>
        ))}
        {cart.length === 0 && (
          <div className="empty-cart">
            <h2>No Produts to review!</h2>
            <button>
              <Link to="/">Shop Now</Link>
            </button>
          </div>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
}

export default Orders;
