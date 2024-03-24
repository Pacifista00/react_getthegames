const TopGame = () => {
  return (
    <section className="top-game bg-blue-700">
      <div className="container flex mx-auto px-4 justify-center gap-6 md:gap-20 pb-10 relative top-50">
        <figure>
          <img
            className="w-56 h-48 md:h-64 object-cover rounded-2xl shadow-lg mx-auto transition duration-300 hover:scale-105"
            src="../../public/images/tekken.jpg"
            alt=""
          />
          <figcaption className="text-slate-200 text-center text-l md:text-xl tracking-wider mt-3 uppercase">
            TEKKEN 8
          </figcaption>
        </figure>
        <figure>
          <img
            className="w-52 h-48 md:h-64 object-cover rounded-2xl shadow-lg mx-auto transition duration-300 hover:scale-105"
            src="../../public/images/fortnite.jpg"
            alt=""
          />
          <figcaption className="text-slate-200 text-center text-l md:text-xl tracking-wider mt-3 uppercase">
            FORTNITE
          </figcaption>
        </figure>
        <figure>
          <img
            className="w-52 h-48 md:h-64 object-cover rounded-2xl shadow-lg mx-auto transition duration-300 hover:scale-105"
            src="../../public/images/grandturismo.webp"
            alt=""
          />
          <figcaption className="text-slate-200 text-center text-l md:text-xl tracking-wider mt-3 uppercase">
            GRAND TURISMO 7
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TopGame;
