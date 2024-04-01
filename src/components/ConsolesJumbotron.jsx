const ConsoleJumbotron = () => {
  return (
    <section className="console-jumbotron">
      <img
        className="h-96 w-full object-cover"
        src="../../public/images/consoles/ps5jumbotron.webp"
        alt=""
      />
      <div className="px-20 mx-auto py-10 shadow-lg flex justify-between items-end">
        <div>
          <h4 className="text-3xl">Fantastic Offer</h4>
          <p className="mt-3">Don't miss this attractive offer</p>
        </div>
        <button className="rounded-full h-fit bg-green-500 py-3 px-5 text-gray-200 hover:bg-green-600">
          Add to basket
        </button>
      </div>
    </section>
  );
};

export default ConsoleJumbotron;
