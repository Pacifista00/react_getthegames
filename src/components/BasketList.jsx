import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const BasketList = ({ formatRupiah, setTotalProduct, setTotalPrice }) => {
  const [data, setData] = useState(null);

  const editBasketCount = async (id, type, qty) => {
    try {
      let quantity = qty;
      let typeEdit = type == 0 ? -1 : 1;
      const response = await axiosInstance.post(
        `/basket/${id}/update`,
        {
          quantity: quantity + typeEdit,
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
      <div className="border-y-2 p-3 md:p-5 mt-5 overflow-x-scroll">
        {data?.length > 0 ? (
          <table className="table-auto w-full text-xs md:text-xl">
            <thead>
              <tr>
                <th className="text-start">Product</th>
                <th>Name</th>
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
                      className="rounded-md w-24 h-16 md:h-24 object-cover"
                      src={basket.image_path}
                      alt=""
                    />
                  </td>
                  <td>
                    <h5 className="text-start">{basket.name}</h5>
                  </td>
                  <td className="whitespace-nowrap">
                    <button
                      onClick={() =>
                        editBasketCount(basket.id, 0, basket.quantity)
                      }
                      className="border bg-slate-200 px-2 rounded-lg"
                    >
                      -
                    </button>
                    <span className="mx-2">{basket.quantity}</span>
                    <button
                      onClick={() =>
                        editBasketCount(basket.id, 1, basket.quantity)
                      }
                      className="border bg-slate-200 px-2 rounded-lg"
                    >
                      +
                    </button>
                  </td>
                  <td>{formatRupiah(basket.price * basket.quantity)}</td>
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
