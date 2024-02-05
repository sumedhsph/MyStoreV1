import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleLoader
      },
      {
        path: "cart",
        element: <Cart />
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "orders",
        element: <Orders />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
