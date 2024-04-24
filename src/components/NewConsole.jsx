import { Link } from "react-router-dom";
import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const addToBasket = async (e, console_id, quantity) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post(
      "/basket/console/add",
      {
        console_id: console_id,
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

const NewConsole = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getNewConsole = async () => {
      try {
        const response = await axiosInstance.get("/console/5");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getNewConsole();
  }, []);
  return (
    <section className="new-console">
      {data ? (
        <div className="container px-4 mx-auto md:flex md:justify-center md:content-center md:items-center my-20 md:my-0 md:h-screen w-5/6">
          {data ? (
            <img
              className="w-4/5 md:w-5/12 mx-auto mb-5 md:mb-0 md:mr-5"
              src={data.image_path}
              alt=""
            />
          ) : (
            <div className="md:mr-5">.....</div>
          )}
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
              <Link className="w-full" to={`/product/console/${data.id}`}>
                <button className="rounded-full transition duration-300 bg-blue-700 py-2 px-5 text-gray-200 hover:bg-blue-800 w-full">
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
        <div>.....</div>
      )}
    </section>
  );
};

export default NewConsole;
