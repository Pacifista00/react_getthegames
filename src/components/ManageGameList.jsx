import { useState, useEffect } from "react";
import axiosInstance from "../lib/axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, modalMode, close, data, genreData, consoleData }) => {
  if (!isOpen) return null;
  const [oldImage, setOldImage] = useState(
    modalMode == 2 ? data.image_path : ""
  );
  const [image, setImage] = useState(null);
  const [name, setName] = useState(modalMode == 2 ? data.name : "");
  const [consoleId, setConsoleId] = useState(
    modalMode == 2 ? data.console.console_id : ""
  );
  const [publisher, setPublisher] = useState(
    modalMode == 2 ? data.publisher : ""
  );
  const [releaseYear, setReleaseYear] = useState(
    modalMode == 2 ? data.release_year : ""
  );
  const [stock, setStock] = useState(modalMode == 2 ? data.stock : "");
  const [price, setPrice] = useState(modalMode == 2 ? data.price : "");
  const [genre, setGenre] = useState(modalMode == 2 ? data.genre : "");
  const [description, setDescription] = useState(
    modalMode == 2 ? data.description : ""
  );
  const animatedComponents = makeAnimated();
  const genreGame =
    modalMode == 2
      ? data.genre.map((genre) => ({
          value: genre.genre_id,
          label: genre.name,
        }))
      : "";
  const [genres, setGenres] = useState(
    genreData.map((genre) => ({
      value: genre.id,
      label: genre.name,
    }))
  );
  const handleGenreChange = (selectedOptions) => {
    const selectedGenresData = selectedOptions.map((option) => ({
      genre_id: option.value,
      name: option.label,
    }));
    setGenre(selectedGenresData);
  };

  const addGame = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("console_id", consoleId);
      formData.append("publisher", publisher);
      formData.append("release_year", releaseYear);
      formData.append("description", description);
      formData.append("stock", stock);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      genre.map((item) => {
        formData.append("genre[]", item.genre_id);
      });

      const response = await axiosInstance.post(`/game/add`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const updateGame = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("console_id", consoleId);
      formData.append("publisher", publisher);
      formData.append("release_year", releaseYear);
      formData.append("description", description);
      formData.append("stock", stock);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      genre.map((item) => {
        formData.append("genre[]", item.genre_id);
      });

      const response = await axiosInstance.post(
        `/game/${data.id}/update`,
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
              <form onSubmit={modalMode == 1 ? addGame : updateGame}>
                <h1 className="text-2xl font-bold mb-4">
                  {modalMode == 1 ? "Add Game" : "Edit Game"}
                </h1>
                <div>
                  <div className="mb-3">
                    {modalMode == 2 ? (
                      <img
                        className="h-32 w-32 mx-auto object-cover mb-3 shadow-lg"
                        src={oldImage}
                        alt=""
                      />
                    ) : null}
                    <input
                      id="image"
                      type="file"
                      className="mx-auto text-center bg-slate-200 rounded-md"
                      onChange={(e) => setImage(e.target.files[0])}
                      {...(modalMode == 1 ? { required: true } : {})}
                    />
                  </div>

                  <div className="flex flex-col mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      className="border-b-2 focus:outline-none focus:border-black"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label>Console</label>
                    <Select
                      defaultValue={
                        modalMode == 2
                          ? {
                              value: consoleId,
                              label: data.console.name,
                            }
                          : null
                      }
                      options={consoleData.map((console) => ({
                        value: console.id,
                        label: console.name,
                      }))}
                      onChange={(e) => setConsoleId(e.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="publisher">Publisher</label>
                    <input
                      id="publisher"
                      className="border-b-2 focus:outline-none focus:border-black"
                      type="text"
                      value={publisher}
                      onChange={(e) => setPublisher(e.target.value)}
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
                    <label>Genre</label>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      defaultValue={genreGame}
                      isMulti
                      options={genres}
                      onChange={handleGenreChange}
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
                    <textarea
                      id="description"
                      className="border-b-2 focus:outline-none focus:border-black text-sm"
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

const ManageGameList = ({ formatRupiah, Circles }) => {
  const [data, setData] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [consoleData, setConsoleData] = useState(null);
  const [genreData, setGenreData] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (mode, game) => {
    setModalMode(mode);
    setGameData(game);
    setIsModalOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setGameData(null);
    setIsModalOpen(false);
  };
  const deleteGame = async (id) => {
    try {
      const response = await axiosInstance.delete(`/game/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get("/games");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchConsoles = async () => {
      try {
        const response = await axiosInstance.get("/consoles");
        setConsoleData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchGenres = async () => {
      try {
        const response = await axiosInstance.get("/genres");
        setGenreData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
    fetchConsoles();
    fetchGames();
  }, []);

  return (
    <section className="manage-console-list">
      <h1 className="text-2xl ">Manage Games</h1>
      <button
        onClick={() => showModal(1, console)}
        className="bg-green-500 hover:bg-green-600 text-slate-200 py-2 px-5 rounded-full mt-2 mb-4"
      >
        <FontAwesomeIcon icon={faPlus} />
        Add Game
      </button>
      {data ? (
        <div className="overflow-x-scroll">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr>
                <th className="font-medium text-start pr-2">Image</th>
                <th className="font-medium text-start pr-2">Name</th>
                <th className="font-medium text-start pr-2">Console</th>
                <th className="font-medium text-start pr-2">Publisher</th>
                <th className="font-medium text-start pr-2">Release year</th>
                <th className="font-medium text-start pr-2">Stock</th>
                <th className="font-medium text-start pr-2">Price</th>
                <th className="font-medium text-start pr-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((game) => (
                <tr key={game.id} className="border-b">
                  <td className="pr-2">
                    <img
                      className="w-24 h-16 object-cover"
                      src={game.image_path}
                      alt=""
                    />
                  </td>
                  <td className="pr-2">{game.name}</td>
                  <td className="pr-2">{game.console.name}</td>
                  <td className="pr-2">{game.publisher}</td>
                  <td className="pr-2">{game.release_year}</td>
                  <td className="pr-2">{game.stock}</td>
                  <td className="pr-2">{formatRupiah(game.price)}</td>
                  <td className="pr-2">
                    <button
                      onClick={() => showModal(2, game)}
                      className="rounded-full py-1 px-4 mb-1 bg-green-500 hover:bg-green-600 text-slate-200 w-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteGame(game.id)}
                      className="rounded-full py-1 px-4 bg-blue-700 hover:bg-blue-800 text-slate-200 w-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            isOpen={isModalOpen}
            modalMode={modalMode}
            data={gameData}
            close={closeModal}
            genreData={genreData}
            consoleData={consoleData}
          />
        </div>
      ) : (
        <div className="flex justify-center py-20">
          <Circles />
        </div>
      )}
    </section>
  );
};

export default ManageGameList;
