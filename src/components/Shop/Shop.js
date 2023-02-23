import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        console.log("AP", addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddtoCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const existedProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (!existedProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      existedProduct.quantity += 1;
      newCart = [...rest, existedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddtoCart={handleAddtoCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} products={products} />
      </div>
    </div>
  );
};

export default Shop;
