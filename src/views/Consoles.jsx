import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ConsoleList from "../components/ConsoleList";
import ConsoleJumbotron from "../components/ConsolesJumbotron";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Consoles = ({ setToken, formatRupiah }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar setToken={setToken} />
      <ConsoleJumbotron />
      <SearchBar />
      <ConsoleList formatRupiah={formatRupiah} />
      <Footer />
    </div>
  );
};

export default Consoles;
