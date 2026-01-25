import React from "react";

const Cards8 = () => {
  const list = [
    {
      src: "https://static.priceoye.pk/images/home/extended-warranty.svg",
      h1: "Priceoye ",
      p: "Extended Warranty",
      button: "Know More",
    },
    {
      src: "https://static.priceoye.pk/images/home/order-packaging.svg",
      h1: "Packaging",
      p: " Video",
      button: "Know More",
    },
    {
      src: "https://static.priceoye.pk/images/home/feature-shipping.svg",
      h1: "Open Parcel ",
      p: "(ISB-LHR-KHI)",
      button: "Know More",
    },
    {
      src: "https://static.priceoye.pk/images/home/easy_instalment.svg",
      h1: "Easy ",
      p: "Installments",
      button: "Know More",
    },
  ];
  return (
    <div className="m-auto max-w-[1205px] px-5 md:px-6 lg:px-8">
      <p className="text-lg font-semibold">Reason to Buy</p>
      <div className="grid grid-cols-2 gap-4 md:gap-3 my-6">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#0078d5] text-white rounded-xl grid grid-cols-1 md:grid-cols-2 p-3 md:p-5 items-center"
            >
              <img
                src={item.src}
                alt=""
                className="w-[200px] md:w-[300px] h-[100px] md:h-[140px]"
              />
              <div className="flex flex-col items-center">
                <div className="w-[180px] font-[450] leading-[23px]">
                  <p className="text-[16px] md:text-[19px] font-mono text-center">
                    {item.h1}
                  </p>
                  <p className="text-[15px] md:text-[19px] font-mono text-center">
                    {item.p}
                  </p>
                </div>
                <button className="bg-[#f88b2a] text-sm font-[500] rounded-sm w-[105px] h-[31px] mt-3">
                  {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards8;
