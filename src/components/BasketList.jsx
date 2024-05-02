import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const BasketList = ({ setTotalProduct, setTotalPrice }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBaskets = async () => {
      try {
        let totalProduct = 0;
        let totalPrice = 0;
        const response = await axiosInstance.get("/basket", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setData(response.data.data);

        response.data.data.forEach((product) => {
          totalPrice += product.price * product.quantity;
        });
        response.data.data.forEach((product) => {
          totalProduct += product.quantity;
        });

        setTotalProduct(totalProduct);
        setTotalPrice(totalPrice);
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
        {data?.length > 0 ? (
          <table className="table-auto w-full">
            <thead className="text-sm md:text-xl">
              <tr>
                <th className="text-start">Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((basket) => (
                <tr key={basket.id} className="text-center">
                  <td className="flex items-center">
                    <img
                      className="rounded-md h-14 w-14 md:w-32 md:h-32 object-cover mr-5"
                      src={basket.image_path}
                      alt=""
                    />
                    <div>
                      <h5 className="md:text-xl">{basket.name}</h5>
                    </div>
                  </td>
                  <td>
                    <button className="border bg-slate-200 px-2 rounded-lg">
                      -
                    </button>
                    <span className="mx-2">{basket.quantity}</span>
                    <button className="border bg-slate-200 px-2 rounded-lg">
                      +
                    </button>
                  </td>
                  <td>Rp {basket.price * basket.quantity}</td>
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
          </table>
        ) : (
          <div className="text-xl text-center text-slate-700">
            <FontAwesomeIcon icon={faBasketShopping} /> Basket is empty...
          </div>
        )}
      </div>
    </section>
  );
};

export default BasketList;
