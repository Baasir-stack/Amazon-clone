import { useSelector } from "react-redux";
import Header from "./components/Header";
import { selectItems, selectTotal } from "./slices/basketSlice";
import CheckoutProduct from "./components/CheckoutProduct";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex flex-col flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            alt="advert"
            height={250}
            className="object-contain"
          />

          <div className="flex flex-col py-5 bg-white">
            <h1 className="text-3xl border-b pb-4 font-semibold">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                image={item.image}
                hasPrime={item.hasPrime}
                category={item.category}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-xl whitespace-nowrap">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap font-semibold">
                Subtotal ({items.length} items):
                <span className="font-bold text-red-600"> ${total}</span>
              </h2>

              <button
                disabled={!userDetails}
                className={`button mt-2 ${
                  !userDetails &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
                }`}
              >
                {!userDetails ? "Sign In to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
