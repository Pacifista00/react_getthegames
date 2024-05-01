import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import Consoles from "./views/Consoles";
import Games from "./views/Games";
import Basket from "./views/Basket";
import Login from "./views/Login";
import Register from "./views/Register";
import Product from "./views/Product";
import Profile from "./views/Profile";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/consoles" element={<Consoles />} />
      <Route path="/games" element={<Games />} />
      <Route path="/product/:product_type/:id" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  </Router>
);
