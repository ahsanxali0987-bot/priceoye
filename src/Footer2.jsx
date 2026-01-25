import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Footer2 = () => {
  const buttons = [
    {
      icon: <FaHome size={23} />,
      title: "home",
    },
    {
      icon: <IoIosNotifications size={25} />,
      title: "notification",
    },
    {
      icon: <AiFillMessage size={25} />,
      title: "categories",
    },
    {
      icon: <FaShoppingCart size={25} />,
      title: "cart",
    },
    {
      icon: <MdAccountCircle size={25} />,
      title: "account",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 block md:hidden mb-[1px]">
      <article className="bg-[#59b6fe] flex items-center justify-between py-[10px] text-white px-6 md:px-12 backdrop-blur-sm bg-opacity-80">
        <div className="flex items-center gap-2">
          <p className="text-[14px] md:text-[16px] font-medium">
            Sign in for the best experience
          </p>
        </div>

        <button className="px-4 py-2 text-sm font-[500] rounded-md border-2 border-white transition-all duration-300 bg-white text-[#48afff] hover:bg-transparent hover:text-white active:scale-95">
          Sign in
        </button>
      </article>
      <article className="px-7 py-3 bg-[#ffffff]">
        <div className="flex justify-between">
          {buttons.map((item, index) => {
            return (
              <div  
                className="text-[#979797] flex flex-col items-center gap-1 hover:text-[#59b6fe]"
                key={index}
              >
                <p className="">{item.icon}</p>
                <p className="text-[13px] font-[500]">{item.title}</p>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Footer2;
