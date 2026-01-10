import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import ProductImage1 from "../assets/product1.jpg";
import ProductImage2 from "../assets/product2.png";
import ProductImage3 from "../assets/product3.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Dummy Product 1",
      price: 2000,
      image: ProductImage1,
      crossPrice: 3000,
    },
    {
      id: 2,
      name: "Dummy Product 2",
      price: 1500,
      image: ProductImage2,
      crossPrice: 2500,
    },
    {
      id: 3,
      name: "Dummy Product 3",
      price: 2200,
      image: ProductImage3,
      crossPrice: 3200,
    },
    {
      id: 4,
      name: "Dummy Product 4",
      price: 2500,
      image: ProductImage1,
      crossPrice: 3500,
    },
    {
      id: 5,
      name: "Dummy Product 5",
      price: 1800,
      image: ProductImage2,
      crossPrice: 2800,
    },
    {
      id: 6,
      name: "Dummy Product 6",
      price: 3600,
      image: ProductImage3,
      crossPrice: 4600,
    },
    {
      id: 7,
      name: "Dummy Product 7",
      price: 2400,
      image: ProductImage1,
      crossPrice: 3400,
    },
    {
      id: 8,
      name: "Dummy Product 8",
      price: 1500,
      image: ProductImage2,
      crossPrice: 2500,
    },
  ];
  return (
    <>
      <Layout>
        {/* Breadcumb */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex gap-x-1 items-center text-sm">
            <Link>Home</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Shop</Link>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto">
          <div className="flex text-4xl text-green-400">Shop</div>
        </div>

        {/* Main Container */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto mt-5">
          <div className="grid grid-cols-12 gap-5">

            {/* Sidebar */}
            <div className=" col-span-12 lg:col-span-2 pb-5">

              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
                <span className="text-2xl font-bold">Filters</span>
                <span className="">Clear</span>
              </div>

              {/* Category filter */}
              <div className="font-bold pt-2 mb-2">Category</div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Topwear</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Bottomwear</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Footwear</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Shoes</span>
              </div>

              {/* Brands filter */}
              <div className="font-bold pt-4 mb-2">Brands</div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Allen Solly</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Zara</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Addidas</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Flying Machine</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Jockey</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                <span>Puma</span>
              </div>

              {/* Price Range filter */}
              <div className="font-bold pt-4 mb-2">Price range</div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="radio" className="w-4 h-4 border border-gray-400" />
                <span>Under Rs.2000</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="radio" className="w-4 h-4 border border-gray-400" />
                <span>Rs.2000 - Rs.5000</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input type="radio" className="w-4 h-4 border border-gray-400" />
                <span>Above Rs.500</span>
              </div>

            </div>

            {/* products */}
            <div className="col-span-12 lg:col-span-10">
              <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {products &&
                  products.map((product) => {
                    return (
                      <div key={product.id}>
                        <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                          <img className="object-cover w-full lg:h-95 duration-500 ease-in-out transition-transform hover:scale-110" src={product.image} alt="product image 1" />
                        </div>
                        <div>
                          <h3 className="text-lg text-lg-800 font-semibold">{product.name}</h3>
                          <p className="text-base text-gray-700 font-semibold">
                            Rs.{product.price} <span className="line-through text-gray-500">Rs.{product.crossPrice}</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
