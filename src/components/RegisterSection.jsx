import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RegisterSection = () => {
  return (
    <section className="lg:w-1/3 text-slate-800 flex items-center mx-auto">
      <div className="container px-7 lg:px-12 xl:px-20">
        <div className="mb-10">
          <h1 className="text-2xl lg:text-4xl text-slate-800 font-semibold">
            <Link to="/">
              <FontAwesomeIcon
                className="mr-3 cursor-pointer text-green-500 hover:text-green-600"
                icon={faCircleArrowLeft}
              />
            </Link>
            Register
          </h1>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3 mb-3">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
              type="password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passwordconfirm">Confirm Password</label>
            <input
              id="passwordconfirm"
              className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
              type="password"
            />
          </div>
          <button
            className="mt-3 rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          <h2>Have account? Login here.</h2>
          <Link to="/login">
            <button
              className="mt-3 rounded-full bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 w-full"
              type="submit"
            >
              Login
            </button>
          </Link>
          <p className="mt-2 text-slate-600">
            By signing up, agree to our terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
