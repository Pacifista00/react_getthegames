import { Link } from "react-router-dom";

const NotAdmin = () => {
  return (
    <div className="bg-green-500 h-screen flex justify-center items-center">
      <div className="text-slate-200 text-center">
        <h1 className="text-7xl">ERROR</h1>
        <h2 className="text-2xl mb-1">PAGE NOT FOUND!</h2>
        <p className="text-sm mb-4">Sorry. Only admin can access this page.</p>
        <Link className="text-blue-700 underline" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotAdmin;
