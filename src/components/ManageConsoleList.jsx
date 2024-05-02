import { useState, useEffect } from "react";
import axiosInstance from "../lib/axios";

const Modal = ({ isOpen, close, data }) => {
  if (!data) return null;
  const [oldImage, setOldImage] = useState(data.image_path);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(data.name);
  const [developer, setDeveloper] = useState(data.developer);
  const [releaseYear, setReleaseYear] = useState(data.release_year);
  const [stock, setStock] = useState(data.stock);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);

  const updateConsole = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("developer", developer);
      formData.append("release_year", releaseYear);
      formData.append("description", description);
      formData.append("stock", stock);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }

      const response = await axiosInstance.post(
        `/console/${data.id}/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-scroll">
          <div className="flex items-center justify-center ">
            <div className="bg-white p-5 rounded-lg w-96 my-10">
              <form onSubmit={updateConsole}>
                <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
                <div>
                  <div className="mb-3">
                    <img
                      className="h-32 w-32 mx-auto object-cover mb-3 shadow-lg"
                      src={oldImage}
                      alt=""
                    />
                    <input
                      id="image"
                      type="file"
                      className="mx-auto text-center bg-slate-200 rounded-md"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>

                  <div className="flex flex-col mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      className="border-b-2 focus:outline-none focus:border-black"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="developer">Developer</label>
                    <input
                      id="developer"
                      className="border-b-2 focus:outline-none focus:border-black"
                      type="text"
                      value={developer}
                      onChange={(e) => setDeveloper(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="releaseYear">Release Year</label>
                    <input
                      id="releaseYear"
                      className="border-b-2 focus:outline-none focus:border-black"
                      type="text"
                      value={releaseYear}
                      onChange={(e) => setReleaseYear(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="stock">Stock</label>
                    <input
                      id="stock"
                      className="border-b-2 focus:outline-none focus:border-black "
                      type="text"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="price">price</label>
                    <input
                      id="price"
                      className="border-b-2 focus:outline-none focus:border-black "
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="description">Description</label>
                    <input
                      id="description"
                      className="border-b-2 focus:outline-none focus:border-black "
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold mt-3 py-2 px-4 rounded-full"
                  >
                    Save
                  </button>
                  <button
                    onClick={close}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold mt-3 py-2 px-4 rounded-full"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ManageConsoleList = () => {
  const [data, setData] = useState(null);
  const [consoleData, setConsoleData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (consoles) => {
    setConsoleData(consoles);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <section className="manage-console-list">
      <h1 className="text-2xl mb-5">Manage Console</h1>
      {data ? (
        <div className="overflow-x-scroll">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr>
                <th className="font-medium text-start pr-2">Image</th>
                <th className="font-medium text-start pr-2">Name</th>
                <th className="font-medium text-start pr-2">Developer</th>
                <th className="font-medium text-start pr-2">Release year</th>
                <th className="font-medium text-start pr-2">Stock</th>
                <th className="font-medium text-start pr-2">Price</th>
                <th className="font-medium text-start pr-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((console) => (
                <tr key={console.id} className="border-b">
                  <td className="pr-2">
                    <img
                      className="w-24 h-16 object-cover"
                      src={console.image_path}
                      alt=""
                    />
                  </td>
                  <td className="pr-2">{console.name}</td>
                  <td className="pr-2">{console.developer}</td>
                  <td className="pr-2">{console.release_year}</td>
                  <td className="pr-2">{console.stock}</td>
                  <td className="pr-2">{console.price}</td>
                  <td className="pr-2">
                    <button
                      onClick={() => showModal(console)}
                      className="rounded-full py-1 px-4 mb-1 bg-green-500 hover:bg-green-600 text-slate-200 w-full"
                    >
                      Edit
                    </button>
                    <button className="rounded-full py-1 px-4 bg-blue-700 hover:bg-blue-800 text-slate-200 w-full">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal isOpen={isModalOpen} data={consoleData} close={closeModal} />
        </div>
      ) : (
        <div>.....</div>
      )}
    </section>
  );
};

export default ManageConsoleList;
