import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
import { removeFromDb } from "../../utilities/fakedb";

function Orders() {
  const { products, previousCart } = useLoaderData();
  // create a state so we can remove items from the cart
  const [cart, setCart] = useState(previousCart);

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
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Orders;
