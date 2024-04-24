import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { useParams } from "react-router-dom";

const Product = () => {
  let { product_type, id } = useParams();
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <div className="flex items-center justify-center min-h-svh">
        <ProductDetail product_type={product_type} id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Product;