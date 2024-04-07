import Navbar from "../components/Navbar";
import LoginSection from "../components/LoginSection";
import LoginImage from "../components/LoginImage";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="flex min-h-screen w-screen">
      <LoginSection />
      <LoginImage />
    </div>
  );
};

export default Login;
