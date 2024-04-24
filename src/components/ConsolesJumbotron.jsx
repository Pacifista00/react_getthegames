import axiosInstance from "../lib/axios";

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

const ConsoleJumbotron = () => {
  return (
    <section className="console-jumbotron">
      <img
        className="h-96 w-full object-cover"
        src="../../public/images/consoles/ps5jumbotron.webp"
        alt=""
      />
      <div className="px-5 md:px-20 mx-auto py-10 shadow-lg flex justify-between items-end">
        <div>
          <h4 className="text-3xl">Fantastic Offer</h4>
          <p className="mt-2">
            <span className="font-semibold mr-2">Playstation 5.</span>Don't miss
            this attractive offer
          </p>
        </div>
        <button
          onClick={(e) => addToBasket(e, 5, 1)}
          className="rounded-full h-fit bg-blue-700 py-3 px-5 text-gray-200 hover:bg-blue-800"
        >
          Add to basket
        </button>
      </div>
    </section>
  );
};

export default ConsoleJumbotron;
