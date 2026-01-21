import React from "react";

const Card = () => {
  const list = [
    {
      img: "https://images.priceoye.pk/xiaomi-redmi-a5-pakistan-priceoye-4jqr9-270x270.webp",
      title: "Xiaomi Redmi A5",
      newprice: "21,999",
      discount: "14",
    },
    {
      img: "https://images.priceoye.pk/tecno-spark-go-2-pakistan-priceoye-554fi-270x270.webp",
      title: "Techno Spark go",
      newprice: "22,999",
      discount: "10",
    },
    {
      img: "https://images.priceoye.pk/nothing-cmf-phone-1-pakistan-priceoye-6mo6r-270x270.webp",
      title: "nothing Cmf phone 1",
      newprice: "66,099",
      discount: "12",
    },
    {
      img: "https://images.priceoye.pk/honor-x6c-pakistan-priceoye-vixo7-270x270.webp",
      title: "honor x6c",
      newprice: "29,749",
      discount: "7",
    },
    {
      img: "https://images.priceoye.pk/samsung-galaxy-fit-3-with-one-year-brand-warranty-pakistan-priceoye-1q534-270x270.webp",
      title: "Samsung Galaxy Fit 3 (1 Year Brand Warranty)",
      newprice: "10,999",
      discount: "34",
    },
    {
      img: "https://images.priceoye.pk/apple-ipad-11-a16-256gb-pakistan-priceoye-sq4n9-270x270.webp",
      title: "apple ipad 11 (A16)",
      newprice: "112,999",
      discount: "10",
    },
    {
      img: "https://images.priceoye.pk/vgr-v-733-hair-remover-electric-epilator-pakistan-priceoye-goid7-270x270.webp",
      title: "VGR V-733 Hair Remover Electric Epilator",
      newprice: "5699",
      discount: "43",
    },
    {
      img: "https://images.priceoye.pk/kemei-km-6330-hair-beard-trimmer-3-in-1-pakistan-priceoye-kge42-270x270.webp",
      title: "KM-6330 3 in 1 Grooming Kit",
      newprice: "1,649",
      discount: "45",
    },
  ];

  return (
    <div>
      <div className="relative flex justify-center mt-8">
        <img
          className="h-full w-auto"
          src="https://static.priceoye.pk/images/sale/sale-home-mb.png"
          alt=""
        />
        <p className="absolute capitalize items-center font-semibold text-white sm:text-[35px] lg:text-[40px] pt-[20px]">
          {" "}
          new year sale
        </p>
      </div>
      <div className="bg-[#09907e] ">
        <div className="py-[50px] max-w-[1195px]  m-auto">
          <div className="flex justify-end">
            <button className="bg-[#fafafa] text-sm font-semibold py-[8px] px-[20px] mb-10">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-md p-4 flex flex-col justify-between pb-10"
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-sm text-gray-700 mb-2 line-clamp-1 flex gap-1 capitalize">
                    <img
                      src="https://images.priceoye.pk/badges/priceoye-sale-20260107-94x7e.png"
                      alt=""
                      className="w-[40px] h-[10px] mt-[5px]"
                    />
                    {item.title}
                  </h3>
                  <div className="flex justify-between mb-2">
                    <h2 className="font-semibold text-lg">
                      <span className="text-base">Rs</span> {item.newprice}
                    </h2>
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
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
