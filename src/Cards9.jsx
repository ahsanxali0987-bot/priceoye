import React from "react";

const Cards9 = () => {
  const list = [
    {
      src: "https://images.priceoye.pk/xiaomi-redmi-pad-2-8-256-wifi-1-year-warranty-pakistan-priceoye-82efz-270x270.webp",
      h1: "Xiaomi Redmi Pad 2 Wifi 1 Year Warranty",
      h2: "Rs 55,900",
      h3: "Rs 79,999",
      h4: "30% OFF",
    },
    {
      src: "https://images.priceoye.pk/xiaomi-smart-air-purifier-4-lite-filter-pro-pakistan-priceoye-yvkpo-270x270.webp",
      h1: "Xiaomi Smart Air Purifier 4 Lite Filter Pro",
      h2: "Rs 10,799",
      h3: "Rs 21,000",
      h4: "49% OFF",
    },
    {
      src: "https://static.priceoye.pk/images/product-placeholder.gif",
      h1: "Xiaomi 15T",
      h2: "Rs 157,999",
      h3: "Rs 169,999",
      h4: "7% OFF",
    },
    {
      src: "https://images.priceoye.pk/xiaomi-redmi-pad-2-8-256-wifi-pakistan-priceoye-uh13s-270x270.webp",
      h1: "Xiaomi Redmi Pad 2 8/256",
      h2: "Rs 55,499",
      h3: "Rs 64,999",
      h4: "15% OFF",
    },
    {
      src: "https://images.priceoye.pk/xiaomi-pb2020mi-20000mah-22-5w-fast-charging-built-in-cable-power-bank-pakistan-priceoye-2p2ic-270x270.webp",
      h1: "Xiaomi PB2020MI 20000mAh 22.5W Fast Charging Built-in Cable Power...",
      h2: "Rs 6,499",
      h3: "Rs 12,000",
      h4: "46% OFF",
    },
    {
      src: "https://images.priceoye.pk/xiaomi-redmi-15-pakistan-priceoye-se2kc-270x270.webp",
      h1: "Xiaomi Redmi 15",
      h2: "Rs 40,449",
      h3: "Rs 45,999",
      h4: "12% OFF",
    },
    {
      src: "https://images.priceoye.pk/xiaomi-smart-air-purifier-4-lite-filter-pakistan-priceoye-p3q2a-500x500.webp",
      h1: "Xiaomi Smart Air Purifier Elite Filter",
      h2: "Rs 14,799",
      h3: "Rs 29,000",
      h4: "49% OFF",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
      <p className="py-8 text-lg font-semibold">
        <span className="text-red-600">Top Deals</span> In Xiaomi
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="flex justify-center mb-3">
              <img
                src={item.src}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-sm text-gray-700 mb-2">{item.h1}</h3>
            <h2 className="font-semibold text-lg">
              <span className="text-base">Rs</span> {item.h2}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <del className="text-gray-500 text-xs">Rs {item.h3}</del>
              <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-md font-medium">
                {item.h4}% OFF
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

export default Cards9;
