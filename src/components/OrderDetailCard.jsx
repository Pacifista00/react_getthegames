const OrderDetailCard = () => {
  return (
    <section className="p-6 w-72">
      <h1 className="text-2xl mb-7">Order Detail</h1>
      <div className="text-base space-y-2">
        <h4 className="w-full flex">
          Total Product : <span className="ml-auto">5</span>
        </h4>
        <h4 className="w-full flex">
          Total Price : <span className="ml-auto">Rp 2.100.000</span>
        </h4>
        <h4 className="w-full flex">
          Tax : <span className="ml-auto">0%</span>
        </h4>
      </div>
      <div className="mt-7">
        <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
          Login
        </button>
      </div>
    </section>
  );
};

export default OrderDetailCard;
