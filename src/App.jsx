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

//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleLoader } from "./pages/SingleProduct";
import {loader as productsLoader} from "./pages/Products";
//actions
import {action as regiterUserAction} from "./pages/Register";
import { ErrorElement } from './components';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader:productsLoader
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
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
     action:regiterUserAction,
    errorElement: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
