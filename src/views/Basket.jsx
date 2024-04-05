import Navbar from "../components/Navbar";
import BasketList from "../components/BasketList";
import OrderDetailCard from "../components/OrderDetailCard";
import Footer from "../components/Footer";

const Basket = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 lg:px-16 flex gap-5">
          <BasketList />
          <OrderDetailCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
