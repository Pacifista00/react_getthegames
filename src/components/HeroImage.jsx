const HeroImage = () => {
  return (
    <section className="hero-image relative bg-hero h-screen w-auto bg-no-repeat bg-cover">
      <div className="relative bg-slate-800 h-screen bg-opacity-65 items-center content-center text-center">
        <h1 className="text-4xl md:text-6xl text-slate-200 mb-3 font-bold tracking-wide">
          WELCOME <span className="text-green-500">GAMERS!</span>
        </h1>
        <h2 className="text-slate-200 text-l md:text-xl w-3/4 md:w-1/2 mx-auto tracking-wider opacity-75">
          Enjoy the best gaming experience with our exclusive items, and improve
          your gameplay!
        </h2>
        <button className="bg-slate-200 bg-opacity-25 py-3 px-6 mt-3 text-green-500 text-semibold tracking-wider hover:bg-opacity-35 hover:text-green-300">
          Order Now!
        </button>
        <div className="absolute bottom-0 bg-gradient-to-t from-blue-700 w-full h-40"></div>
      </div>
    </section>
  );
};

export default HeroImage;
