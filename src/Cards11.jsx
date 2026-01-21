import React from "react";

const Cards11 = ({ list }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
      <p className="py-8 text-lg font-semibold">Recommended Products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="flex justify-center mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-sm text-gray-700 mb-2">{item.title}</h3>
            <h2 className="font-semibold text-lg">
              <span className="text-base">Rs</span> {item.price}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <del className="text-gray-500 text-xs">Rs {item.oldPrice}</del>
              <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-md font-medium">
                {item.discount}% OFF
              </span>
            </div>
            <img
              src="https://static.priceoye.pk/images/badges/fast-delivery.svg"
              alt=""
              width={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards11;
