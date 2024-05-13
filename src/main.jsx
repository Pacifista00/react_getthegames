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
import ManageConsole from "./views/ManageConsole";
import ManageGame from "./views/ManageGame";
import PageNotFound from "./views/PageNotFound";

const root = createRoot(document.getElementById("root"));
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/consoles"
        element={<Consoles formatRupiah={formatRupiah} />}
      />
      <Route path="/games" element={<Games />} />
      <Route
        path="/product/:product_type/:id"
        element={<Product formatRupiah={formatRupiah} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/basket" element={<Basket formatRupiah={formatRupiah} />} />
      <Route
        path="/manage/console"
        element={<ManageConsole formatRupiah={formatRupiah} />}
      />
      <Route
        path="/manage/game"
        element={<ManageGame formatRupiah={formatRupiah} />}
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
