import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCart } from "./loaders/productsAndCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Shop />,
        },
        {
          path: "/orders",
          loader: productsAndCart,
          element: <Orders />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

