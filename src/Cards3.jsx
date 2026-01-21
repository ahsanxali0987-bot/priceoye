import React from "react";
import { FaStar } from "react-icons/fa";

const Cards3 = () => {
  const cardsData = [
    {
      title: "Realme Note 70",
      image:
        "https://images.priceoye.pk/realme-note-70-pakistan-priceoye-wlv8j-270x270.webp",
      price: "28,499",
      discount: "11% OFF",
      rating: "5.0",
      reviews: "10",
    },
    {
      title: "Nothing Phone 3A",
      image:
        "https://images.priceoye.pk/nothing-phone-3a-pakistan-priceoye-31lt6.png",
      price: "138,900",
      discount: "7% OFF",
      rating: "5.0",
      reviews: "4",
    },
    {
      title: "Samsung Galaxy A07",
      image:
        "https://images.priceoye.pk/samsung-galaxy-a07-pakistan-priceoye-xv6ut-270x270.webp",
      price: "25,499",
      discount: "11% OFF",
      rating: "4.8",
      reviews: "106",
    },
    {
      title: "Xiaomi Redmi A5",
      image:
        "https://images.priceoye.pk/xiaomi-redmi-a5-pakistan-priceoye-4jqr9-270x270.webp",
      price: "21,999",
      discount: "14% OFF",
      rating: "4.8",
      reviews: "72",
    },
  ];

  return (
    <div className="max-w-[1195px] mx-auto sm:px-6 md:px-4 lg:px-2 xl:px-0 ">
      <div className="text-center text-[#404040">
        <p className="font-semibold text-lg text-[#404040]">Best Seller</p>
        <p className="text-[#404040]">Get the best prices in town</p>
      </div>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://images.priceoye.pk/badges/priceoye-sale-20260107-94x7e.png"
              alt=""
              className="w-12 h-3 object-contain"
            />
            <p className="text-sm font-semibold text-gray-700">
              Tecno spark 40
            </p>
          </div>
          <img
            src="https://images.priceoye.pk/tecno-spark-40-pakistan-priceoye-t2m4m-500x500.webp"
            alt=""
            className="max-w-[300px] mx-auto my-6"
          />
          <div className="inline-flex items-center gap-1 bg-[#fbf7eb] text-xs px-2 py-1 rounded-md mb-4">
            <FaStar className="text-[#ffc107]" />
            <span className="font-semibold text-[12px]">4.8</span>
            <span className="text-[#040428] text-[11px] font-semibold pt-[2px]">
              33 Reviews
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">
              <span className="text-base">Rs </span>31,999
            </p>
            <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-md font-medium">
              11% OFF
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col justify-between pb-8 overflow-hidden"
            >
              <div className="flex justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <img
                      src="https://images.priceoye.pk/badges/priceoye-sale-20260107-94x7e.png"
                      alt=""
                      className="w-10 h-3 object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-tight">
                    {card.title}
                  </p>
                </div>
                <img
                  src={card.image}
                  alt=""
                  className="max-w-36 max-h-36 object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1 bg-[#fff7e6] text-xs  px-2 py-1 rounded-md w-28 mt-2">
                <FaStar className="text-[#ffc107]" />
                <span className="font-semibold text-[12px]">{card.rating}</span>
                <span className="text-[#040428] text-[11px] font-semibold pt-[2px]">
                  {card.reviews} Reviews
                </span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="font-semibold">
                  <span className="text-sm">Rs </span>
                  {card.price}
                </p>
                <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-md font-medium">
                  {card.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards3;
