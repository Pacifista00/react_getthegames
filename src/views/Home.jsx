import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import TopGame from "../components/TopGame";
import NewConsole from "../components/NewConsole";
import NewGame from "../components/NewGame";
import FeaturedGames from "../components/FeaturedGames";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <HeroImage />
      <TopGame />
      <NewConsole />
      <NewGame />
      <FeaturedGames />
      <Footer />
    </div>
  );
};

export default Home;
