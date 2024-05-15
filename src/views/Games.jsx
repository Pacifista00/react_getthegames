import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Consoles = ({ setToken }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar setToken={setToken} />
      <div className="py-10">
        <SearchBar />
        <GameList />
      </div>
      <Footer />
    </div>
  );
};

export default Consoles;
