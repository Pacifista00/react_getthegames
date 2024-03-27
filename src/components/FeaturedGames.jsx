const FeaturedGames = () => {
  return (
    <section className="featured-games bg-blue-700 py-20">
      <div className="container mx-auto px-16">
        <h3 className="text-4xl sm:text-5xl text-slate-200">Featured Games</h3>
        <div className="game-card my-8 grid grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/tekken.jpg"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                TEKKEN 8
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/nfsheat.jpg"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                Need For Speed Heat
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/fortnite.jpg"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                Fortnite
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/grandturismo.webp"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                Grand turismo 7
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/tekken.jpg"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                TEKKEN 8
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
          <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer">
            <img
              className="h-44 sm:h-52 object-cover rounded-xl transition duration-300 brightness-100 group-hover:brightness-50"
              src="../../public/images/tekken.jpg"
              alt=""
            />
            <div className="md:absolute bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
              <figcaption className="text-slate-200 text-base sm:text-lg lg:text-2xl mb-1">
                TEKKEN 8
              </figcaption>
              <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-3 text-slate-200 hover:bg-green-500 active:bg-green-700">
                Check
              </button>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
