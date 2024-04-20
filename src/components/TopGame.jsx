import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const TopGame = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getTopGame = async () => {
      try {
        const response = await axiosInstance.get("/games");
        setData(response.data.data.slice(3.0));
      } catch (error) {
        console.error(error);
      }
    };

    getTopGame();
  }, []);
  return (
    <>
      <section className="top-game bg-blue-700">
        {data ? (
          <div className="container flex mx-auto px-4 justify-center gap-6 md:gap-20 pb-10 relative top-50">
            {data.map((game) => (
              <figure key={game.id}>
                <img
                  className="w-52 h-48 md:h-64 object-cover rounded-2xl shadow-lg mx-auto transition duration-300 hover:scale-105"
                  src={game.image_path}
                  alt=""
                />
                <figcaption className="text-slate-200 text-center text-l md:text-xl tracking-wider mt-3 uppercase">
                  {game.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default TopGame;
