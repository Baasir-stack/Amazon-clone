/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import amazonPrimeIcon from "../assets/amazonPrimeIcon.png";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      category,
      rating,
    };

    // Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 my-2 ">
      <img
        src={image}
        alt="product image"
        className="h-[200px] w-[200px] object-contain"
      />
      <div className="col-span-3 mx-5 my-2">
        <p className="font-semibold py-2">{title}</p>
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

        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <p className="font-bold text-red-600">${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src={amazonPrimeIcon}
              className="w-12"
              alt="prime logo"
            />
            <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
