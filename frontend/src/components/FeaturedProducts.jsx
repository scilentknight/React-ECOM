import React from "react";
import ProductImage1 from "../assets/product1.jpg";
import ProductImage2 from "../assets/product2.png";
import ProductImage3 from "../assets/product3.png";
const FeaturedProducts = () => {
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
      price: 1900,
      image: ProductImage2,
      crossPrice: 2900,
    },
  ];
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 py-10">
      <h2 className="text-green-400 text-4xl font-medium pb-10">
        Featured <span className="text-gray-700">Products</span>
      </h2>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                  <img className="w-full object-cover h-100 duration-500 ease-in-out transition-transform hover:scale-110" src={product.image} alt="product image 1" />
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
  );
};

export default FeaturedProducts;
