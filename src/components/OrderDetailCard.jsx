import { useState, useEffect } from "react";
import axiosInstance from "../lib/axios";

const OrderDetailCard = ({ formatRupiah, totalProduct, totalPrice }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (name && email && phone) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [name, email, phone]);

  const deleteAllBasket = async () => {
    try {
      const response = await axiosInstance.delete(`/basket/deletes`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const showSnap = async (token) => {
    try {
      window.snap.pay(token, {
        onSuccess: async function () {
          await deleteAllBasket();
          window.location.reload();
        },
        onError: function (result) {
          console.error("Payment error:", result);
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const pay = async (amount, e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `/checkout`,
        {
          name: name,
          email: email,
          amount: amount,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      showSnap(response.data.snapToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="p-6 w-full lg:w-72">
      <h1 className="md:text-2xl mb-7">Order Detail</h1>
      <div className="text-xs md:text-base space-y-2">
        <h4 className="w-full flex">
          Total Product : <span className="ml-auto">{totalProduct}</span>
        </h4>
        <h4 className="w-full flex">
          Total Price :{" "}
          <span className="ml-auto">{formatRupiah(totalPrice)}</span>
        </h4>
        <h4 className="w-full flex">
          Tax : <span className="ml-auto">0%</span>
        </h4>
      </div>
      <div className="mt-3 border-t-2 pt-3">
        <form onSubmit={(e) => pay(totalPrice, e)}>
          <input
            id="name"
            className="py-1 px-2 w-full border rounded-lg border-slate-300 focus:border-slate-800 focus:outline-none mb-2"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            className="py-1 px-2 w-full border rounded-lg border-slate-300 focus:border-slate-800 focus:outline-none mb-2"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="phone"
            className="py-1 px-2 w-full border rounded-lg border-slate-300 focus:border-slate-800 focus:outline-none mb-2"
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className={`rounded-full py-2 px-5 text-gray-200 mt-1 w-full
              ${
                isFormFilled ? "bg-green-500 hover:bg-green-600" : "bg-gray-300"
              }
            `}
            disabled={!isFormFilled}
          >
            Pay
          </button>
        </form>
      </div>
      <div id="snap-container"></div>
    </section>
  );
};

export default OrderDetailCard;
