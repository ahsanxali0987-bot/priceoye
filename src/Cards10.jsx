import React from "react";

const Cards10 = () => {
  const list = [
    {
      src: "https://static.priceoye.pk/icons/approved-feature.svg",
      h1: "PTA Approved",
      p: "Mobile Phone",
    },
    {
      src: "https://static.priceoye.pk/icons/warranty-feature.svg",
      h1: "1 Year",
      p: "Brand Warranty",
    },
    {
      src: "https://static.priceoye.pk/icons/video-shooting-camera.svg",
      h1: "Packaging Video",
      p: "See Your Products",
    },
    {
      src: "https://static.priceoye.pk/icons/shipping-feature.svg",
      h1: "Fast Delivery",
      p: "All Over Pakistan",
    },
  ];

  return (
    <div className="bg-white mt-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto gap-4 py-8">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-row lg:flex-col items-center justify-center text-center md:text-left lg:text-center gap-3 px-2"
          >
            <div className="flex-shrink-0">
              <img
                src={item.src}
                alt={item.h1}
                className="w-[45px] md:w-[55px] lg:w-[65px] h-auto object-contain"
              />
            </div>
            <div>
              <h1 className="font-[500] text-[12.5px] md:text-[15px] text-[#202020] leading-tight">
                {item.h1}
              </h1>
              <p className="text-[11px] md:text-[12px] text-[#6a7176] mt-0.5">
                {item.p}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards10;
