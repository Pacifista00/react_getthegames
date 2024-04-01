import ConsoleJumbotron from "./ConsolesJumbotron";

const ConsoleList = () => {
  return (
    <section className="console-list">
      <ConsoleJumbotron />
      <div className="container mx-auto px-16">
        <h3 className="text-4xl sm:text-5xl text-slate-200">Featured Games</h3>
        <div className="game-card my-8 grid grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2"></div>
      </div>
    </section>
  );
};

export default ConsoleList;
