import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import ProductImg from "../assets/product1.jpg";

const Checkout = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link>Home</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Checkout</Link>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
        <div className="flex text-4xl text-green-400">Checkout</div>
      </div>

      {/* Main Container */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
        <div className="grid grid-cols-12 gap-5">
          {/* Billing Form */}
          <div className="lg:col-span-8 col-span-12">
            <div className="shadow-lg rounded-md px-6 py-5 border border-gray-100">
              <h2 className="text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3">Billing Details</h2>
              <form className="space-y-3" action="">
                <div>
                  <input type="text" placeholder="Full Name" className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="text" placeholder="Email" className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone No." className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                  </div>
                </div>
                <div>
                  <textarea rows={2} placeholder="Address" className="border border-gray-200 px-3 py-3 w-full rounded-md"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="text" placeholder="City" className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                  </div>
                  <div>
                    <input type="text" placeholder="State" className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Zipcode" className="border border-gray-200 px-3 py-3 w-full rounded-md" />
                </div>
              </form>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-4 col-span-12">
            <div className="rounded-md bg-gray-50 p-5 shadow-md">
              <h2 className="text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3">Order Summary</h2>

              <div className="grid grid-cols-12 gap-5 mb-3">
                {/* Image */}
                <div className="col-span-2">
                  <img src={ProductImg} className="w-full rounded-md bg-slate-50" alt="" />
                </div>

                {/* Title, Size, Quantity */}
                <div className="col-span-8">
                  {/* Title */}
                  <h3 className="text-gray-700 text-sm font-semibold">Nice white jacket for women</h3>
                  <div className="flex space-x-5 text-sm">
                    <div className="text-gray-600">
                      Size: <span className="text-gray-800">L</span>
                    </div>
                    <div className="text-gray-600">
                      Qty: <span className="text-gray-800">2</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-sm font-semibold text-right">Rs.100</div>
              </div>

              <div className="grid grid-cols-12 gap-5 mb-3">
                {/* Image */}
                <div className="col-span-2">
                  <img src={ProductImg} className="w-full rounded-md bg-slate-50" alt="" />
                </div>

                {/* Title, Size, Quantity */}
                <div className="col-span-8">
                  {/* Title */}
                  <h3 className="text-gray-700 text-sm font-semibold">Nice white jacket for women</h3>
                  <div className="flex space-x-5 text-sm">
                    <div className="text-gray-600">
                      Size: <span className="text-gray-800">L</span>
                    </div>
                    <div className="text-gray-600">
                      Qty: <span className="text-gray-800">2</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-sm font-semibold text-right">Rs.100</div>
              </div>

              {/* Subtotal */}
              <div className="flex py-3 justify-between text-sm text-gray-500 font-semibold">
                <div>Subtotal</div>
                <div>Rs. 10000</div>
              </div>

              {/* Total */}
              <div className="flex justify-between border-b border-gray-200 pb-5 text-sm text-gray-900 font-semibold">
                <div>Total</div>
                <div>Rs. 10000</div>
              </div>

              {/* Payment Method */}
              <div className="text-lg text-gray-900 font-bold mt-5">Payment Method</div>

              <div className="flex mb-5 items-center text-sm text-gray-800 space-x-5 mt-3">
                <div className="space-x-2 items-center">
                  <input type="radio" name="paymentMethod" defaultChecked />
                  <span>COD</span>
                </div>
                <div className="space-x-2 items-center">
                  <input type="radio" name="paymentMethod" />
                  <span>Stripe</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="bg-green-400 px-5 font-semibold text-center py-2.5 w-full hover:bg-slate-900 hover:text-white rounded-md" data-discover="true">
                Place Order
              </button>

              {/* Message */}
              <div className="text-gray-400 text-sm text-center py-3">Secure payment & encrypted checkout</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
