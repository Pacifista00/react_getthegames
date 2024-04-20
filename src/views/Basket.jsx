import Navbar from "../components/Navbar";
import BasketList from "../components/BasketList";
import OrderDetailCard from "../components/OrderDetailCard";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Basket = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 lg:px-16 flex gap-5 flex-col lg:flex-row">
          <BasketList />
          <OrderDetailCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
