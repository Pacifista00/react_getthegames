const PageNotFound = () => {
  return (
    <div className="bg-green-500 h-screen flex justify-center items-center">
      <div className="text-slate-200 text-center">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-2xl">PAGE NOT FOUND!</h2>
        <p className="text-sm">Sorry. The page you requested was not found.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
