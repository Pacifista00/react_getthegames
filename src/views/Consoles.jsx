import Navbar from "../components/Navbar";
import ConsoleList from "../components/ConsoleList";
import ConsoleJumbotron from "../components/ConsolesJumbotron";
import Footer from "../components/Footer";

const Consoles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ConsoleJumbotron />
      <ConsoleList />
      <Footer />
    </div>
  );
};

export default Consoles;
