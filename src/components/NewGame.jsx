import { Link } from "react-router-dom";
import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const addToBasket = async (e, game_id, quantity) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post(
      "/basket/game/add",
      {
        game_id: game_id,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const NewGame = ({ Circles }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getNewGame = async () => {
      try {
        const response = await axiosInstance.get("/game/7");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getNewGame();
  }, []);
  return (
    <section className="new-game">
      {data ? (
        <div className="container px-4 mx-auto md:flex md:flex-row-reverse md:justify-center md:content-center md:items-center my-20 md:my-0 md:h-screen w-5/6">
          <img
            className="w-4/5 md:w-5/12 mx-auto mb-5 md:mb-0 md:ml-5 rounded-xl shadow-xl"
            src={data.image_path}
            alt=""
          />
          <div>
            <h3 className="text-3xl md:text-4xl tracking-widest font-thin mb-3 md:mb-7 text-slate-800">
              TEKKEN 8, the brand-new entry in the legendary TEKKEN franchise
            </h3>
            <p className="text-sm md:text-base text-slate-800">
              TEKKEN 8 continues the tragic saga of the Mishima bloodline and
              its world-shaking father-and-son grudge matches.
            </p>
            <div className="flex gap-5 mt-4 md:mt-7">
              <Link className="w-full" to={`/product/game/${data.id}`}>
                <button className="w-full rounded-full transition duration-300 bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 ">
                  Check detail
                </button>
              </Link>
              <button
                onClick={(e) => addToBasket(e, data.id, 1)}
                className="rounded-full transition duration-300 bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-20">
          <Circles />
        </div>
      )}
    </section>
  );
};

export default NewGame;
