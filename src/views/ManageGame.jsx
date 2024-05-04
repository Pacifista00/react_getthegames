import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarProfile from "../components/NavbarProfile";
import ManageGameList from "../components/ManageGameList";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const ManageGame = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <div className="py-10">
        <NavbarProfile />
        <div className="container px-2 md:px-10 mx-auto">
          <ManageGameList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageGame;
