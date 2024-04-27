import Navbar from "../components/Navbar";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <div className="py-10">
        <NavbarProfile />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
