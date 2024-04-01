const ConsoleList = () => {
  return (
    <section className="console-list py-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-16 grid md:grid-cols-2 gap-5">
        <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer shadow-lg rounded-3xl">
          <img
            className="w-full h-80 object-cover shadow-sm"
            src="../../public/images/consoles/ps2.webp"
            alt=""
          />
          <div className="p-5 text-center text-xl">
            <figcaption>
              <h1 className="text-3xl text-sky-600">Playstation 2</h1>
              <h2>Rp 350.000</h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer shadow-lg rounded-3xl">
          <img
            className="w-full h-80 object-cover shadow-sm"
            src="../../public/images/consoles/ps3.jpg"
            alt=""
          />
          <div className="p-5 text-center text-xl">
            <figcaption>
              <h1 className="text-3xl text-sky-600">Playstation 3</h1>
              <h2>Rp 1.350.000</h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer shadow-lg rounded-3xl">
          <img
            className="w-full h-80 object-cover shadow-sm"
            src="../../public/images/consoles/ps4.jpg"
            alt=""
          />
          <div className="p-5 text-center text-xl">
            <figcaption>
              <h1 className="text-3xl text-sky-600">Playstation 4</h1>
              <h2>Rp 4.350.000</h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer shadow-lg rounded-3xl">
          <img
            className="w-full h-80 object-cover shadow-sm"
            src="../../public/images/consoles/PS5.webp"
            alt=""
          />
          <div className="p-5 text-center text-xl">
            <figcaption>
              <h1 className="text-3xl text-sky-600">Playstation 5</h1>
              <h2>Rp 7.350.000</h2>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default ConsoleList;
