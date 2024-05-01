import { useState, useEffect } from "react";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, close, data }) => {
  const navigate = useNavigate();
  const [oldImage, setOldImage] = useState(data.image_path);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(data.name);
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [bio, setBio] = useState(data.bio ? data.bio : "");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("bio", bio);
      if (image) {
        formData.append("image", image);
      }

      const response = await axiosInstance.post(
        `/user/${data.id}/update`,
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg w-96">
            <form onSubmit={updateUser}>
              <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
              <div>
                <div className="mb-3">
                  <img
                    className="h-32 w-32 mx-auto object-cover"
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
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    className="border-b-2 focus:outline-none focus:border-black"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="border-b-2 focus:outline-none focus:border-black"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    className="border-b-2 focus:outline-none focus:border-black "
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
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
      )}
    </>
  );
};

const ProfileCard = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);
  return (
    <div className="w-full">
      {data ? (
        <div className="">
          <div className="flex items-end">
            <img
              className="rounded-full shadow-lg w-36 h-36 md:w-56 md:h-56 border border-spacing-1 ml-3 md:ml-7 object-cover"
              src={data.image_path}
              alt=""
            />
            <div className="ml-5 text-base">
              <h1 className="text-2xl md:text-4xl">{data.username}</h1>
              <h2>{data.role}</h2>
              <h2>{data.email}</h2>
            </div>
          </div>
          <div className="bg-slate-100 p-10 pt-28 md:pt-32 -mt-24 md:-mt-28 rounded-lg">
            <div className="my-1">
              <h2 className="text-base md:text-lg">Bio :</h2>
              <p className="min-h-10 bg-white rounded-lg p-3">{data.bio}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={showModal}
                className="mt-5 text-slate-200 text-center cursor-pointer bg-green-500 hover:bg-green-600 py-3 px-12 rounded-full"
              >
                Edit Profile
              </button>
            </div>
            <Modal isOpen={isModalOpen} close={showModal} data={data} />
          </div>
        </div>
      ) : (
        <div>.....</div>
      )}
    </div>
  );
};

export default ProfileCard;
