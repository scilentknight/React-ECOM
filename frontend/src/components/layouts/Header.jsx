import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="bg-green-200">
        <div className="text-sm max-w-360 mx-auto py-1 lg:px-8 px-5">Free delivery on your first Order!</div>
      </div>
      <div className="mx--w-360 lg:py-6 py-3 lg:px-8 px-5 flex justify-between">
        <Link>
          <span className="text-3xl text-green-500 font-bold">X</span>
          <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
        </Link>

        <nav className="text-lg hidden text-gray-800 space-x-5 sm:flex items-center">
          <Link className=" hover:text-green-500" to={"/"}>
            Home
          </Link>
          <Link className=" hover:text-green-500" to={"/shop"}>
            Mens
          </Link>
          <Link className=" hover:text-green-500" to={"/shop"}>
            Women
          </Link>
          <Link className=" hover:text-green-500" to={"/shop"}>
            Kids
          </Link>
          <Link className="relative">
            <span className="bg-red-400 text-white text-sm rounded-full flex justify-center items-center absolute left-2 w-6 h-6 -top-5.5">0</span>
            <IoCartOutline className="mt-1" />
          </Link>
          <Link className="bg-green-400 px-5 py-2 ms-3 text-md rounded-md text-gray-800">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
