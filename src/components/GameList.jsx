import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GameList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get("/games");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);
  return (
    <section className="game-list">
      <div className="container mx-auto px-4 lg:px-16">
        {data ? (
          <div className="game-card grid grid-cols-2 md:grid-cols-4 gap-2">
            {data.map((game) => (
              <figure
                key={game.id}
                className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer"
              >
                <img
                  className="w-full h-80 object-cover rounded-xl transition duration-300 group-hover:brightness-50"
                  src={game.image_path}
                  alt=""
                />
                <Link to={`/product/game/${game.id}`}>
                  <div className="md:absolute text-lg text-slate-700 md:text-slate-200 bottom-3 left-3 mt-2 transition duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-7 group-hover:translate-x-0">
                    <figcaption className="lg:text-2xl mb-1">
                      {game.name}
                    </figcaption>
                    <button className="hidden md:block rounded-full md:outline hover:outline-none transition duration-300 bg-green-500 md:bg-transparent py-1 px-5 text-slate-200 hover:bg-green-500 active:bg-green-700">
                      Check
                    </button>
                  </div>
                </Link>
              </figure>
            ))}
          </div>
        ) : (
          <div>.....</div>
        )}
      </div>
    </section>
  );
};

export default GameList;
