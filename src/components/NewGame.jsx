const NewGame = () => {
  return (
    <section className="new-console md:my-10">
      <div className="container px-4 mx-auto md:flex md:flex-row-reverse md:justify-center md:content-center md:items-center my-20 md:my-44 w-5/6">
        <img
          className="w-4/5 md:w-5/12 mx-auto mb-5 md:mb-0 md:ml-5 rounded-xl shadow-xl"
          src="../../public/images/tekken.jpg"
          alt=""
        />
        <div>
          <h3 className="text-3xl md:text-4xl tracking-widest font-thin mb-3 md:mb-7 text-slate-800">
            TEKKEN 8, the brand-new entry in the legendary TEKKEN franchise
          </h3>
          <p className="text-sm md:text-base text-slate-800">
            TEKKEN 8 continues the tragic saga of the Mishima bloodline and its
            world-shaking father-and-son grudge matches.
          </p>
          <div className="flex gap-5 mt-4 md:mt-7">
            <button className="rounded-full bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 w-full">
              Check detail
            </button>
            <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGame;
