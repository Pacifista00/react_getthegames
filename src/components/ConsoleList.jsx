import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ConsoleList = ({ formatRupiah }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const response = await axiosInstance.get("/consoles");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConsoles();
  }, []);
  return (
    <section className="console-list py-10">
      {data ? (
        <div className="container mx-auto px-4 md:px-10 lg:px-16 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((console) => (
            <Link key={console.id} to={`/product/console/${console.id}`}>
              <figure className="group mb-3 md:mb-0 cursor-pointer hover:shadow-xl transition duration-300 overflow-hidden">
                <img
                  className="w-full h-24 md:h-80 object-cover shadow-sm group-hover:scale-105 transition duration-300"
                  src={console.image_path}
                  alt=""
                />
                <div className="p-5 text-base">
                  <figcaption>
                    <h1 className="text-xl md:text-2xl">{console.name}</h1>
                    <h2 className="text-base md:text-lg">
                      {console.developer}
                    </h2>
                    <h2 className="text-base md:text-lg text-sky-600">
                      {formatRupiah(console.price)}
                    </h2>
                  </figcaption>
                </div>
              </figure>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-4 md:px-10 lg:px-16">.....</div>
      )}
    </section>
  );
};

export default ConsoleList;
