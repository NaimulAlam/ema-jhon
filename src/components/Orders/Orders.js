import React from "react";
import { useLoaderData } from "react-router-dom";

function Orders() {
  const products = useLoaderData();

  return (
    <div>
      <h1>Total Orders: {products.length}</h1>
    </div>
  );
}

export default Orders;
