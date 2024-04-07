import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LoginSection = () => {
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
            Login
          </h1>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3 mb-3">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="border-b-2 lg:pt-1 px-2 focus:outline-none focus:border-black"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="border-b-2 lg:pt-1 px-2 focus:outline-none focus:border-black"
              type="password"
            />
          </div>
          <button
            className="mt-3 rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
          <h2>New here? Create your account.</h2>
          <button
            className="my-3 rounded-full bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 w-full"
            type="submit"
          >
            Register
          </button>
          <p className="text-slate-600">
            By signing up, agree to our terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
