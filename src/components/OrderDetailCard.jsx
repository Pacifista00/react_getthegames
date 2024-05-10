const OrderDetailCard = ({ formatRupiah, totalProduct, totalPrice }) => {
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
        <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
          Pay
        </button>
      </div>
    </section>
  );
};

export default OrderDetailCard;
