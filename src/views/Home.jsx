import HeroImage from "../components/HeroImage";
import TopGame from "../components/TopGame";

const Home = () => {
  return (
    <>
      <HeroImage />
      <TopGame />
      <div className="px-4">
        <h1 className="object-cover">Hello Gamers!!</h1>
      </div>
    </>
  );
};

export default Home;
