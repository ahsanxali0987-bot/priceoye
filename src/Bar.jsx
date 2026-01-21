import React from "react";

const Bar = () => {
  const list = [
    {
      p: "Mobiles",
    },
    {
      p: "Wireless Earbuds",
    },
    {
      p: "Smart Watches",
    },
    {
      p: "Power Banks",
    },
  ];
  return (
    <div className="bg-white my-16 px-4 sm:px-4 md:px-6 lg:px-0 overflow-x-hidden">
      <div className="w-[1195px] mx-auto flex gap-7 items-center h-20">
        <p className="text-[#14a5ff] text-[12px] font-[500]">You Might Also Like</p>
        {list.map((item, index) => {
          return (
            <div className="text-[12px] font-[500]">
              <p key={index}>{item.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;
