import axiosInstance from "../lib/axios";
import { useState, useEffect } from "react";

const addToBasket = async (e, product_type, product_id, quantity) => {
  e.preventDefault();
  try {
    const response = await axiosInstance.post(
      `/basket/${product_type}/add`,
      {
        [product_type === "console" ? "console_id" : "game_id"]: product_id,
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

const ProductDetail = ({ formatRupiah, product_type, id }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async (e) => {
      try {
        const response = await axiosInstance.get(`/${product_type}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setProduct(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [product_type, id]);

  return (
    <section className="product-detail">
      <div className="container py-20 px-10 lg:px-32 flex flex-col md:flex-row gap-10">
        {product ? (
          <>
            <div className="product-image ">
              <img
                className="w-[650px] object-right-top bg-slate-100 rounded-xl shadow-lg"
                src={product.image_path}
                alt=""
              />
            </div>
            <div className="product-detail">
              <h1 className="font-semibold text-2xl md:text-4xl uppercase tracking-widest">
                {product.name}
              </h1>
              <h2 className="text-lg md:text-xl text-green-500">
                {formatRupiah(product.price)}{" "}
              </h2>
              <div className="mt-4 md:mt-8 text-sm md:text-base font-semibold">
                {product_type == "console" ? (
                  <h2 className="mb-1 md:mb-2">
                    Developer :{" "}
                    <span className="font-medium">{product.developer}</span>
                  </h2>
                ) : (
                  <div>
                    <h2 className="mb-1 md:mb-2">
                      Publisher :{" "}
                      <span className="font-medium">{product.publisher}</span>
                    </h2>
                    <h2 className="mb-1 md:mb-2">
                      Console :{" "}
                      <span className="font-medium">
                        {product.console.name}
                      </span>
                    </h2>
                    <h2 className="mb-1 md:mb-2">
                      Genre :{" "}
                      <span className="font-medium">
                        {product.genre.map((item, index) => (
                          <span key={item.genre_id}>
                            {item.name}
                            {index !== product.genre.length - 1 && (
                              <span>, </span>
                            )}
                          </span>
                        ))}
                      </span>
                    </h2>
                  </div>
                )}
                <h2 className="mb-1 md:mb-2">
                  Release Year :{" "}
                  <span className="font-medium">{product.release_year}</span>
                </h2>
                <h2 className="mb-1 md:mb-2">
                  Description :{" "}
                  <p className="font-medium">{product.description}</p>
                </h2>
                <h2 className="mb-1 md:mb-2">
                  Stock : <span className="font-medium">{product.stock}</span>
                </h2>
                <button
                  onClick={(e) => addToBasket(e, product_type, id, 1)}
                  className="mt-5 rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
                >
                  Add To Basket
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>.....</div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
