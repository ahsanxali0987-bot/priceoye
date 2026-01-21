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
    <div className="bg-white mt-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-[1195px] mx-auto items-center gap-10">
        {list.map((item, index) => {
          return (
            <div
              className="text-center flex flex-col items-center py-7"
              key={index}
            >
              <img src={item.src} alt="" className="w-20 mx-10 pb-3" />
              <div>
                <h1 className="font-semibold text-sm text-[#202020]">
                  {item.h1}
                </h1>
                <p className="text-[12px] text-[#6a7176]">{item.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards10;
