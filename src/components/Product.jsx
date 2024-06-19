import { useState } from "react";
import amazonPrimeIcon from "../assets/amazonPrimeIcon.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

/* eslint-disable react/prop-types */
function Product({ id, title, price, category, description, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    // Sending the product as an action to the reduz store... the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-2xl shadow-slate-300">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </p>

      <img
        src={image}
        alt="product"
        height={200}
        width={200}
        className="mx-auto flex-grow object-contain"
      />

      <h4 className="my-3 font-semibold">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <div className="mb-5 font-bold">${price}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src={amazonPrimeIcon} width={50} alt="prime logo" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
