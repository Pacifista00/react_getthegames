import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import Consoles from "./views/Consoles";
import Games from "./views/Games";
import Basket from "./views/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/consoles",
    element: <Consoles />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
