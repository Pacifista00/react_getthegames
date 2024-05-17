import "./index.css";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import NotAdmin from "./views/NotAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import axiosInstance from "./lib/axios";
import { Circles } from "react-loader-spinner";

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

const Spinner = () => {
  return <Circles color="#22c55e" height={40} />;
};

const App = () => {
  const [token, setToken] = useState(
    localStorage.token ? localStorage.token : null
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get("/user", {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          });
          setData(response.data.data);
        } catch (error) {
          localStorage.clear();
          console.log(error);
        }
      }
    };

    checkLogin();
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home setToken={setToken} Circles={Spinner} />}
          />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/" /> : <Login setToken={setToken} />
            }
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/consoles"
            element={
              <Consoles
                setToken={setToken}
                formatRupiah={formatRupiah}
                Circles={Spinner}
              />
            }
          />
          <Route
            path="/games"
            element={<Games setToken={setToken} Circles={Spinner} />}
          />
          <Route
            path="/product/:product_type/:id"
            element={
              <Product
                setToken={setToken}
                formatRupiah={formatRupiah}
                Circles={Spinner}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile setToken={setToken} Circles={Spinner} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/basket"
            element={
              <ProtectedRoute>
                <Basket
                  setToken={setToken}
                  formatRupiah={formatRupiah}
                  Circles={Spinner}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manage/console"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <ManageConsole
                    setToken={setToken}
                    formatRupiah={formatRupiah}
                    Circles={Spinner}
                  />
                </AdminRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/manage/game"
            element={
              <ProtectedRoute>
                <AdminRoute data={data}>
                  <ManageGame
                    setToken={setToken}
                    formatRupiah={formatRupiah}
                    Circles={Spinner}
                  />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/notadmin" element={<NotAdmin />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
