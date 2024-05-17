import Navbar from "../components/Navbar";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import ProfileCard from "../components/ProfileCard";

const Profile = ({ setToken, Circles }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTopOnMount />
      <Navbar setToken={setToken} />
      <div className="py-10">
        <NavbarProfile />
        <div className="container mx-auto px-4 lg:px-16 flex gap-5 flex-col lg:flex-row">
          <ProfileCard Circles={Circles} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
