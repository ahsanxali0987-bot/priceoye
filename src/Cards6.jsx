import React from "react";

const Cards6 = () => {
  const list = [
    {
      src: "https://static.priceoye.pk/images/home/mobiles.webp",
      p: "Mobile",
    },
    {
      src: "https://static.priceoye.pk/images/home/wireless-earbuds.webp",
      p: "Wireless Earbuds",
    },
    {
      src: "https://static.priceoye.pk/images/home/smart-watches.webp",
      p: "Smart Watches",
    },
    {
      src: "https://static.priceoye.pk/images/home/power-banks.webp",
      p: "Power Banks",
    },
  ];
  return (
    <div>
        <p className="text-lg font-semibold py-[30px] ml-[80px]">Shop More Categories</p>
      <div className="flex flex-wrap bg-[#f9dcff] justify-center gap-4 items-center">
        {list.map((item, index) => {
          return (
            <div key={index} className="bg-[#8804a6] items-center text-center p-[2px] rounded-lg w-[120px] h-[150px] my-[30px] ">
              <img src={item.src} alt="" className="bg-white h-24 w-32 rounded-t-lg"/>
              <p className="text-white text-[13px] w-[80px] m-auto">{item.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards6;
