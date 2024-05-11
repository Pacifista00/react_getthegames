import { useState } from "react";
import axiosInstance from "../lib/axios";

const OrderDetailCard = ({ formatRupiah, totalProduct, totalPrice }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const showSnap = async (token) => {
    try {
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("Payment success:", result);
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
      <div className="mt-7">
        <form onSubmit={(e) => pay(totalPrice, e)}>
          <input
            id="name"
            className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black mx-auto w-full"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black mx-auto w-full"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="phone"
            className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black mx-auto w-full"
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 mt-4 w-full"
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
