const NewConsole = () => {
  return (
    <section className="new-console">
      <div className="container px-4 mx-auto md:flex md:justify-center md:content-center md:items-center my-20 md:my-0 md:h-screen w-5/6">
        <img
          className="w-4/5 md:w-5/12 mx-auto mb-5 md:mb-0 md:mr-5"
          src="../../public/images/PS5.webp"
          alt=""
        />
        <div>
          <h3 className="text-3xl md:text-4xl tracking-widest font-thin mb-3 md:mb-7 text-slate-800">
            Introducing our newest console. Playstation 5!
          </h3>
          <p className="text-sm md:text-base text-slate-800">
            Experience lightning-fast loading with an ultra-high speed SSD,
            deeper immersion with support for haptic feedback1, adaptive
            triggers1 and 3D Audio*, and an all-new generation of incredible
            PlayStation games.
          </p>
          <div className="flex gap-5 mt-4 md:mt-7">
            <button className="rounded-full transition duration-300 bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 w-full">
              Check detail
            </button>
            <button className="rounded-full transition duration-300 bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewConsole;
