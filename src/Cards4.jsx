import React from "react";

const Cards4 = () => {
  const list = [
    {
      title: "Tecno SPARK 30 Pro",
      price: "42,999",
      image:
        "https://images.priceoye.pk/tecno-spark-30-pro-pakistan-priceoye-ptq0a-270x270.webp",
      oldPrice: "14,999",
      discount: "12",
    },
    {
      title: " Tecno SPARK Go 2",
      price: "22,999",
      image:
        "https://images.priceoye.pk/tecno-spark-go-2-pakistan-priceoye-554fi-270x270.webp",
      oldPrice: "12,999",
      discount: "13",
    },
    {
      title: "Itel A100",
      price: "22,299",
      image:
        "https://images.priceoye.pk/itel-a100-pakistan-priceoye-1daml-500x500.webp",
      oldPrice: "3,999",
      discount: "42",
    },
    {
      title: "Realme C85 Pro",
      price: "52,599",
      image:
        "https://images.priceoye.pk/realme-c85-pro-pakistan-priceoye-cxlwg-500x500.webp",
      oldPrice: "7,999",
      discount: "42",
    },
    {
      title: "Samsung Galaxy A17",
      price: "51,199",
      image:
        "https://images.priceoye.pk/samsung-galaxy-a17-pakistan-priceoye-idgtd-270x270.webp",
      oldPrice: "9,999",
      discount: "24",
    },
    {
      title: "Infinix Hot 60 Pro Plus",
      price: "61,999",
      image:
        "https://images.priceoye.pk/infinix-hot-60-pro-plus-pakistan-priceoye-s0vme-270x270.webp",
      oldPrice: "2,499",
      discount: "12",
    },
    {
      title: "Honor X6c",
      price: "29,749",
      image:
        "https://images.priceoye.pk/honor-x6c-pakistan-priceoye-hrksg-500x500.webp",
      oldPrice: "6,999",
      discount: "13",
    },
    {
      title: "Xiaomi Redmi Note 14",
      price: "47,500",
      image:
        "https://images.priceoye.pk/xiaomi-redmi-note-14-pakistan-priceoye-eli5s-500x500.webp",
      oldPrice: "4,999",
      discount: "15",
    },
  ];

  const button = [
    {
      title: "Below Rs. 15,000",
    },
    {
      title: "Rs. 15,000 - Rs. 25,000",
    },
    {
      title: "Rs. 25,000 - Rs. 40,000",
    },
    {
      title: "Rs. 40,000 - Rs. 60,000",
    },
    {
      title: "Rs. 60,000 - Rs. 80,000",
    },
    {
      title: "Rs. 80,000 - Rs. 100,000",
    },
    {
      title: "Rs. 100,000 - Rs. 150,000",
    },
    {
      title: "Above 150,000",
    },
  ];

  const brands = [
    {
      name: "Samsung",
      logo: "https://images.priceoye.pk/brands/samsung-az6v0.svg",
    },
    {
      name: "Infinix",
      logo: "https://images.priceoye.pk/brands/infinix-gn1ip.svg",
    },
    {
      name: "Nokia",
      logo: "https://images.priceoye.pk/brands/nokia-hsejy.svg",
    },
    { name: "ZTE", logo: "https://images.priceoye.pk/brands/zte-w3607.svg" },
    { name: "itel", logo: "https://images.priceoye.pk/brands/itel-zqykn.svg" },
    {
      name: "HONOR",
      logo: "https://images.priceoye.pk/brands/honor-32olp.svg",
    },
    {
      name: "FAWYA",
      logo: "https://images.priceoye.pk/brands/faywa-dpowq.svg",
    },
    {
      name: "G'FIVE",
      logo: "https://images.priceoye.pk/brands/gfive-6ts5e.svg",
    },
    {
      name: "Motorola",
      logo: "https://images.priceoye.pk/brands/motorola-swq0h.svg",
    },
  ];

  return (
    <div className="bg-[url(https://static.priceoye.pk/images/categories/section-mobiles-bg-md.png)] mt-10 px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[1195px] mx-auto flex justify-between items-center pt-12 px-2">
        <p className="text-white font-semibold font-sans text-xl">
          Latest Mobiles
        </p>
        <button className="bg-[#fafafa] text-[#20494a] text-sm py-[7px] px-6 border border-[#c1bdbd] rounded-sm hover:bg-[#c1bdbd] transition duration-300">
          View All
        </button>
      </div>
      <div className="gap-5 max-w-[1195px] mx-auto py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col justify-between pb-10"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-sm text-gray-700 mb-2 line-clamp-1">
                {item.title}
              </h3>
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
          );
        })}
      </div>
      <p className="text-[#202020] text-xl font-semibold max-w-[1195px] mx-auto">
        Shop by Price
      </p>
      <div className="max-w-[1195px] mx-auto gap-4 my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {button.map((item, but) => {
          return (
            <button
              key={but}
              className="bg-[#f90390] text-white text-sm py-4 hover:bg-white hover:text-[#f90390] transition duration-300  rounded-xl"
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <p className="text-[#202020] text-xl font-semibold max-w-[1195px] mx-auto py-8">
        Shop by Brand
      </p>
      <div className="max-w-[1195px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
        {brands.map((item, buts) => {
          return (
            <div
              className="my-2 bg-black justify-center max-w-40 max-h-48"
              key={buts}
            >
              <img
                key={buts}
                src={item.logo}
                alt={item.name}
                className=" object-contain mx-auto p-4 h-24 w-24"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards4;
