import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const BasketList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBaskets = async () => {
      try {
        const response = await axiosInstance.get("/baskets");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBaskets();
  }, []);
  return (
    <section className="basket-games flex-1">
      <h1 className="text-xl md:text-3xl">My Basket</h1>
      <div className="border-y-2 p-3 md:p-5 mt-5">
        <table class="table-auto w-full">
          <thead className="text-sm md:text-xl">
            <tr>
              <th className="text-start">Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          {data ? (
            <tbody>
              {data.map((basket) => (
                <tr className="text-center">
                  <td className="flex items-center">
                    <img
                      className="rounded-md h-14 w-14 md:w-32 md:h-32 object-cover mr-5"
                      src={basket.image_path}
                      alt=""
                    />
                    <div>
                      <h5 className="md:text-xl">Tekken 8</h5>
                    </div>
                  </td>
                  <td>
                    <button className="border bg-slate-200 px-2 rounded-lg">
                      -
                    </button>
                    <span className="mx-2">1</span>
                    <button className="border bg-slate-200 px-2 rounded-lg">
                      +
                    </button>
                  </td>
                  <td>Rp 700.000</td>
                  <td>
                    <button>
                      <FontAwesomeIcon
                        className="bg-red-100 p-2 rounded-full text-red-500 hover:bg-red-50 hover:text-red-400 transition duration-100"
                        icon={faTrash}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={3}>Basket is empty...</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};

export default BasketList;
