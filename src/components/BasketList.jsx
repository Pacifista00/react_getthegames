import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BasketList = () => {
  return (
    <section className="basket-games flex-1">
      <h1 className="text-3xl">My Basket</h1>
      <div className="border-y-2 p-5 mt-5">
        <table class="table-auto w-full">
          <thead className="text-xl">
            <tr>
              <th className="text-start">Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="flex items-center">
                <img
                  className="rounded-md h-32 object-contain mr-5"
                  src="../../public/images/tekken.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-xl">Tekken 8</h5>
                </div>
              </td>
              <td>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  -
                </button>
                <span className="mx-2">1</span>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  +
                </button>
              </td>
              <td>Rp 700.000</td>
              <td>
                <button>
                  <FontAwesomeIcon
                    className="bg-red-100 p-2 rounded-full text-red-500 hover:bg-red-50 hover:text-red-400 transition duration-100"
                    icon={faTrash}
                  />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center">
                <img
                  className="rounded-md h-32 object-contain mr-5"
                  src="../../public/images/tekken.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-xl">Tekken 8</h5>
                </div>
              </td>
              <td>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  -
                </button>
                <span className="mx-2">1</span>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  +
                </button>
              </td>
              <td>Rp 700.000</td>
              <td>
                <button>
                  <FontAwesomeIcon
                    className="bg-red-100 p-2 rounded-full text-red-500 hover:bg-red-50 hover:text-red-400 transition duration-100"
                    icon={faTrash}
                  />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center">
                <img
                  className="rounded-md h-32 object-contain mr-5"
                  src="../../public/images/tekken.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-xl">Tekken 8</h5>
                </div>
              </td>
              <td>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  -
                </button>
                <span className="mx-2">1</span>
                <button className="border bg-slate-200 px-2 rounded-lg">
                  +
                </button>
              </td>
              <td>Rp 700.000</td>
              <td>
                <button>
                  <FontAwesomeIcon
                    className="bg-red-100 p-2 rounded-full text-red-500 hover:bg-red-50 hover:text-red-400 transition duration-100"
                    icon={faTrash}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BasketList;
