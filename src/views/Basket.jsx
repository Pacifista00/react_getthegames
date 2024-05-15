import Navbar from "../components/Navbar";
import NavbarProfile from "../components/NavbarProfile";
import BasketList from "../components/BasketList";
import OrderDetailCard from "../components/OrderDetailCard";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { useState } from "react";

const Basket = ({ setToken, formatRupiah }) => {
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar setToken={setToken} />
      <div className="py-10">
        <NavbarProfile />
        <div className="container mx-auto px-4 lg:px-16 flex gap-5 flex-col lg:flex-row">
          <BasketList
            formatRupiah={formatRupiah}
            setTotalProduct={setTotalProduct}
            setTotalPrice={setTotalPrice}
          />
          <OrderDetailCard
            formatRupiah={formatRupiah}
            totalProduct={totalProduct}
            totalPrice={totalPrice}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
