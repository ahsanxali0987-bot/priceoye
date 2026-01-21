import React from "react";

const Cards11 = ({ list }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold text-[#404040]">Recommended Products</p>
        <button className="text-[#48afff] text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md p-4 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex justify-center mb-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 h-10 overflow-hidden leading-tight font-medium">
              {item.title}
            </h3>
            <div>
              <h2 className="font-bold text-xl text-[#202020]">
                <span className="text-sm font-normal">Rs</span>{" "}
                {item.price.toLocaleString()}
              </h2>

              <div className="flex justify-between items-center mt-1">
                <del className="text-gray-400 text-xs">
                  Rs {item.oldPrice?.toLocaleString()}
                </del>
                <span className="text-[#1fb789] text-[10px] bg-[#e9f8f3] px-2 py-0.5 rounded-full font-bold">
                  {item.discount}% OFF
                </span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-50">
              <img
                src="https://static.priceoye.pk/images/badges/fast-delivery.svg"
                alt="Fast Delivery"
                className="w-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards11;
