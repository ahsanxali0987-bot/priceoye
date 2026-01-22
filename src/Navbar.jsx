import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdMic } from "react-icons/io";
import Popup from "./Popup";

const buttons = [
  {
    text: "Log in",
    style: "bg-white text-[#48afff] hover:bg-[#48afff] hover:text-white",
  },
  { text: "Register", style: "text-white hover:bg-white hover:text-[#48afff]" },
];

const Navbar = ({ list }) => {
  const [open, setOpen] = useState(false);

  const [filter, setFilter] = useState("");

  const [showResults, setShowResults] = useState(false);

  const filteredItems = list.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <div className="bg-[#48afff] h-[55px] md:h-[72px] flex items-center px-[3px] md:px-[6px] justify-between">
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <RiMenu2Fill
            size={27}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
          <img
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
            className="w-28 md:w-32"
          />
        </div>
        <div className="px-4 block">
          <div className="flex items-center bg-white rounded-md md:rounded-lg overflow-hidden max-w-[400px] mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-[170px] md:w-[370px] h-[38px] md:h-[48px] px-2 outline-none text-[#86759b]"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setShowResults(e.target.value.length > 0);
              }}
            />
            <button className="px-2 text-[#48afff]">
              <IoMdMic size={22} />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`px-[20px] py-[8px] text-sm rounded-md border border-white transition ${btn.style}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
      <Popup shows={open} hides={() => setOpen(false)} />
      {showResults ? (
        <div className="w-[170px] md:w-[370px] mx-auto grid grid-cols-1 gap-4 bg-gray-50">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-sm text-gray-700 mb-2 h-10 overflow-hidden line-clamp-2">
                  {item.title}
                </h3>
                <h2 className="font-semibold text-lg text-black">
                  <span className="text-xs">Rs</span> {item.price}
                </h2>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No products found for "{filter}"
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
