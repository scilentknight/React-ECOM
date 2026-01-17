import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import ProductImg1 from "../assets/product1.jpg";
import ProductImg2 from "../assets/product2.png";
import ProductImg3 from "../assets/product3.png";

const Product = () => {
  const gallery = [
    {
      id: 1,
      url: ProductImg1,
    },
    {
      id: 2,
      url: ProductImg2,
    },
    {
      id: 3,
      url: ProductImg3,
    },
  ];

  const [mainImage, setMainImage] = useState(null);

  const handleGallery = (item) => {
    setMainImage(item);
  };

  useEffect(() => {
    if (gallery) {
      setMainImage(gallery[0]);
    }
  }, []);
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link>Shop</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Good Product for men</Link>
        </div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-5 col-span-12">
            {/* Gallery */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-10 bg-slate-50 rounded-md overflow-hidden">
                {/* Main Images */}
                <img src={mainImage?.url} className="w-full rounded-md" alt="" />
              </div>
              <div className="col-span-2">
                {/* Small Images */}
                {gallery &&
                  gallery.map((item) => {
                    return (
                      <Link key={item.id}>
                        <img onClick={() => handleGallery(item)} src={item.url} className="w-full bg-slate-50 rounded-md overflow-hidden mb-1" alt="" />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            {/* Product info */}
            <h2 className="font-bold text-2xl text-gray-800">Good Product for men</h2>

            {/* Price */}
            <div className="font-bold text-lg mt-3">
              Rs.2000 <span className="text-gray-500 font-normal line-through">Rs.3000</span>
            </div>

            {/* Description */}
            <div className="text-base text-gray-500 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus.</div>

            {/* Sizes */}
            <div className="font-bold text-lg mt-3">Select size</div>
            <div className="flex gap-x-2 mt-3">
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">S</div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">M</div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">L</div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">XL</div>
            </div>

            {/* Cart Button */}
            <div className="mt-8 border-b border-gray-200 pb-10">
              <Link className="bg-green-400 px-5 py-3 text-md rounded-md text-gray-800 hover:bg-gray-900 hover:text-white">Add To Cart</Link>
            </div>

            <div className="flex flex-col text-gray-500 mt-5">
              <p>100% Cotton</p>
              <p>Money back gurantee</p>
              <p>Cash on delivery available on this product</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
