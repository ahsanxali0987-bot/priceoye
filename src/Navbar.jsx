import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="relative z-50">
      <div className="bg-[#48afff] h-[55px] md:h-[72px] flex items-center px-4 justify-between">
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <RiMenu2Fill
            size={27}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
          <img
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
            className="w-24 md:w-32"
          />
        </div>
        <div className="flex-1 max-w-[500px] px-2 md:px-4 relative">
          <div className="flex items-center bg-white rounded-md md:rounded-lg overflow-hidden h-[38px] md:h-[48px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 outline-none text-[#86759b] text-sm md:text-base"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setShowResults(e.target.value.length > 0);
              }}
            />
            <button className="px-3 text-[#48afff] border-l border-gray-100">
              <IoMdMic size={22} />
            </button>
          </div>
          <div
            className={`absolute left-2 right-2 md:left-4 md:right-4 top-[45px] md:top-[55px] bg-white shadow-2xl rounded-b-lg max-h-[400px] overflow-y-auto border-t border-gray-100 transition-all duration-300 ease-in-out ${
              showResults
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 flex gap-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xs md:text-sm text-gray-700 line-clamp-1 font-[3000]">
                      {item.title}
                    </h3>
                    <h2 className="font-[500] text-[#4b4b4b] text-sm md:text-base">
                      <span className="text-[10px] mr-0.5">Rs</span>
                      {item.price.toLocaleString()}
                    </h2>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-400 text-sm">
                No products found
              </div>
            )}
          </div>
        </div>
        <Link to="/Login">
          <div className="hidden md:flex items-center gap-2">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`px-6 py-2 text-sm font-medium rounded-md border border-white transition-all ${btn.style}`}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </Link>
      </div>
      <Popup shows={open} hides={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
