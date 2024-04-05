import Navbar from "../components/Navbar";
import GameList from "../components/GameList";
import Footer from "../components/Footer";

const Consoles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <GameList />
      <Footer />
    </div>
  );
};

export default Consoles;
