import React from "react";

const BillingInfo = () => {
  return (
    <>
      <div className="shadow-lg rounded-md">
        <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold">Billing Address</h2>

        <form action="" className="space-y-4 py-3 px-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                Name
              </label>
              <input type="text" placeholder="Name" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                Email
              </label>
              <input type="email" placeholder="Email" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                Phone
              </label>
              <input type="text" placeholder="Phone Number" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>
          </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                Address
              </label>
              <textarea rows={3} placeholder="Address" className="px-3 py-2 border border-gray-200 shadow rounded-md"></textarea>
            </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                City
              </label>
              <input type="text" placeholder="City" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                State
              </label>
              <input type="email" placeholder="State" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1 ms-1">
                Zip
              </label>
              <input type="text" placeholder="Zipcode" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
            </div>
          </div>

          <div className="py-3">
            <button className="bg-green-400 px-5 py-3 text-md rounded-md text-gray-800 text-center hover:bg-gray-900 hover:text-white">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BillingInfo;
