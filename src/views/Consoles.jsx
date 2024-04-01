import Navbar from "../components/Navbar";
import ConsoleList from "../components/ConsoleList";
import ConsoleJumbotron from "../components/ConsolesJumbotron";
import Footer from "../components/Footer";

const Consoles = () => {
  return (
    <>
      <Navbar />
      <ConsoleJumbotron />
      <ConsoleList />
      <Footer />
    </>
  );
};

export default Consoles;
