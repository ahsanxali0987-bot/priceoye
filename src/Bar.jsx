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
    <div className="bg-white text-sm my-16 sm:px-4 md:px-6 lg:px-8 xl:px-0 overflow-x-auto">
      <div className="max-w-[1195px] mx-auto flex gap-7 items-center h-20">
        <p className="text-[#14a5ff]">You Might Also Like</p>
        {list.map((item, index) => {
          return (
            <>
              <p key={index}>{item.p}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;
