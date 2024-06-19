import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [userDetails, setUserDetails] = useState(null);
  const items = useSelector(selectItems);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUserDetails(null);
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* logo */}
        <div className="mt-3 flex items-center flex-grow sm:flex-grow-0 ml-1 mr-6">
          <Link to="/">
            <img
              src="https://links.papareact.com/f90"
              alt="amazon logo"
              width={113}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 placeholder:text-gray-600"
            placeholder="Search Amazon"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 px-6 whitespace-nowrap">
          {/* left */}
          <div className="link">
            <Link
              to={!userDetails ? "/login" : "#"}
              onClick={userDetails ? handleSignOut : null}
            >
              <p>
                {userDetails
                  ? `Hello, ${userDetails.displayName}`
                  : "Hello, Sign in"}
              </p>
              <p className="font-bold md:text-sm">
                {userDetails ? "Sign Out" : "Account and Lists"}
              </p>
            </Link>
          </div>

          {/* center */}
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          {/* right */}
          <Link to="/checkout">
            <div className="link relative flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p className="hidden md:block font-bold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
