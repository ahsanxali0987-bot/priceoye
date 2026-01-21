import React from "react";
import { FaStar } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Cards5 = () => {
  const list = [
    {
      src: "https://images.priceoye.pk/review/10184/2952360-xqtpe-270x270.jpeg",
    },
    {
      src: "https://images.priceoye.pk/review/11265/2730895-av9t9-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/9567/1423761-faxyo-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/7612/2933438-l9jfn-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/9499/1896101-mxa03-270x270.jpeg",
    },
    {
      src: "https://images.priceoye.pk/review/8311/2944851-rk1xv-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/11509/2935376-r79ol-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/10838/2933100-dfzrd-270x270.jpg",
    },
    {
      src: "https://images.priceoye.pk/review/7445/2927573-k7px4-270x270.jpg",
    },
  ];

  const list2 = [
    {
      h1: "ZB",
      h2: "Zubair Bhutta",
      h3: "Verified",
      h5: "03 October 2025",
      p: "good performance",
    },
    {
      h1: "MS",
      h2: "MUHAMMAD SIDDIQUE...",
      h3: "Verified",
      h5: "23 December 2025",
      p: "Good Quality 💯",
    },
    {
      h1: "HA",
      h2: "Hasan Ahmed",
      h3: "Verified",
      h5: "13 December 2025",
      p: "Quality is good. I am maximum getting 22W charging speed however my phone supports 60W.",
    },
  ];
  return (
    <div className="w-[1200px] m-auto">
      <div className="text-center py-10">
        <p className="text-[#404040] text-[19px] font-semibold">
          Customer Review
        </p>
        <p className="text-[#404040]">
          What our Customers say about Priceoye.pk
        </p>
      </div>
      <div className="grid grid-cols-9 gap-4">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} alt="" className="rounded-md" />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-2 py-7 justify-between">
        {list2.map((item1, index1) => {
          return (
            <div
              className="bg-white p-[18px] border border-[#d6d8da] rounded-md"
              key={index1}
            >
              <div className="flex gap-3">
                <h1 className="text-[#979797] bg-[#f3f4f4] w-[60px] h-[60px] rounded-full text-[25px] text-center pt-2">
                  {item1.h1}
                </h1>
                <div className="">
                  <div className="flex w-[250px] justify-between">
                    <h2 className="text-[#48afff] text-[15px]">{item1.h2}</h2>
                    <h3 className="text-[#1fb789] flex text-[15px]">
                      <SiTicktick className="mt-[4px] mr-1" />
                      {item1.h3}
                    </h3>
                  </div>
                  <h4 className="flex text-[#ffc107]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </h4>
                  <h5 className="text-[#979797] text-[15px]">{item1.h5}</h5>
                </div>
              </div>
              <p className="text-[#a9a9a9] text-[15px]">{item1.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards5;
