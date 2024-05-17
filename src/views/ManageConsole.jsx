import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarProfile from "../components/NavbarProfile";
import ManageConsoleList from "../components/ManageConsoleList";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const ManageConsole = ({ setToken, formatRupiah, Circles }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar setToken={setToken} />
      <div className="py-10">
        <NavbarProfile />
        <div className="container px-2 md:px-10 mx-auto">
          <ManageConsoleList formatRupiah={formatRupiah} Circles={Circles} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageConsole;
