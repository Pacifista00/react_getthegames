import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const ConsoleList = () => {
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
        <div className="container mx-auto px-4 md:px-10 lg:px-16 grid md:grid-cols-2 gap-5">
          {data.map((console) => (
            <figure className="relative group overflow-hidden mb-3 md:mb-0 cursor-pointer shadow-lg rounded-3xl">
              <img
                className="w-full h-80 object-cover shadow-sm"
                src={console.image_path}
                alt=""
              />
              <div className="p-5 text-center text-xl">
                <figcaption>
                  <h1 className="text-3xl text-sky-600">Playstation 2</h1>
                  <h2>
                    Rp <span>{console.price}</span>
                  </h2>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      ) : (
        <div className="px-4 md:px-10 lg:px-16">.....</div>
      )}
    </section>
  );
};

export default ConsoleList;
