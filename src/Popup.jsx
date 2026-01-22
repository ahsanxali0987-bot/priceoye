import { React, useState } from "react";
import {
  RiBattery2ChargeLine,
  RiFridgeLine,
  RiRouterLine,
  RiWirelessChargingFill,
} from "react-icons/ri";
import { CiLocationOn, CiSpeaker } from "react-icons/ci";
import { TbAirConditioningDisabled, TbFileSpreadsheet } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { BsSmartwatch, BsEarbuds, BsPower } from "react-icons/bs";
import { MdOutlinePerson2, MdTabletAndroid } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { FaLaptop, FaMotorcycle, FaTv } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { GiCartwheel } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { PiMotorcycleBold } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
import { TiBatteryCharge } from "react-icons/ti";

const Popup = ({ shows, hides }) => {
  const categories = [
    {
      key: "mobile",
      label: "Mobiles",
      icon: FiSmartphone,
      items: [
        "Samsung",
        "Infinix",
        "Oppo",
        "Xiaomi",
        "Vivo",
        "Nothing",
        "Techno",
        "Realme",
        "More Brands",
      ],
    },
    {
      key: "smartwatch",
      label: "Smart Watches",
      icon: BsSmartwatch,
      items: [
        "Faster",
        "Nothing",
        "Zero",
        "Assorted",
        "Dany",
        "Samsung",
        "Huawei",
        "More Brands",
      ],
    },
    {
      key: "earbuds",
      label: "Wireless Earbuds",
      icon: BsEarbuds,
      items: [
        "Xiaomi",
        "Audionic",
        "Sounpeats",
        "Airox",
        "Zero",
        "Assorted",
        "Lenovo",
        "Ronin",
        "More Brands",
      ],
    },
    {
      key: "air",
      label: "Air Purifiers",
      icon: RiRouterLine,
      items: ["Xiaomi", "Beurer", "More Brands"],
    },
    {
      key: "personalcare",
      label: "Personal Care",
      icon: MdOutlinePerson2,
      items: [],
    },
    {
      key: "accessories",
      label: "Mobile Accessories",
      icon: AiOutlineMobile,
      subButtons: [
        { label: "Charging Cables", icon: LuCable },
        { label: "Wireless Chargers", icon: RiWirelessChargingFill },
        { label: "Wall Chargers", icon: RiBattery2ChargeLine },
        { label: "Car Chargers", icon: TiBatteryCharge },
      ],
    },
    {
      key: "speaker",
      label: "Bluetooth Speakers",
      icon: CiSpeaker,
      items: [
        "Xiaomi",
        "Sound Crush",
        "Audionic",
        "Faster",
        "JBL",
        "Tronsmart",
        "Assorted",
        "Anker",
        "More Brands",
      ],
    },
    {
      key: "power",
      label: "Power Banks",
      icon: BsPower,
      items: ["Xiaomi", "Baseus", "Faster", "Joyroom", "More Brands"],
    },
    {
      key: "tablet",
      label: "Tablets",
      icon: MdTabletAndroid,
      items: [
        "Apple",
        "Samsung",
        "Xiaomi",
        "G-Tide",
        "Infinix",
        "Huawei",
        "Itel",
        "Techno",
        "More Brands",
      ],
    },
    {
      key: "laptop",
      label: "Laptops",
      icon: FaLaptop,
      items: ["Lenovo", "Dell", "HP", "Apple", "Asus", "Acer", "More Brands"],
    },
    {
      key: "appliance",
      label: "TV & Home Appliances",
      icon: BiFridge,
      subButtons: [
        { label: "Led-TV", icon: FaTv },
        { label: "AC", icon: TbAirConditioningDisabled },
        { label: "Fridge", icon: RiFridgeLine },
      ],
    },
    {
      key: "auto",
      label: "Auto",
      icon: GiCartwheel,
      subButtons: [
        { label: "Electric Bike", icon: PiMotorcycleBold },
        { label: "Motorcycle", icon: FaMotorcycle },
      ],
    },
  ];

  const popularLists = [
    "Best Mobiles Under 10000",
    "Best Mobiles Under 15000",
    "Best Mobiles Under 20000",
    "Best Mobiles Under 30000",
    "Best Mobiles Under 40000",
    "Best Mobiles Under 50000",
    "Best Mobiles Under 60000",
    "Best Mobiles Under 80000",
    "Best Mobiles Under 100000",
    "Best 5G Phones",
    "Best Camera Phones",
    "Best Selfie Camera Phones",
    "Best PUBG Phones",
    "Most Expensive Phones",
    "Top 10 Fast Charging Phones",
    "Best Mobiles of 2025",
  ];

  const navigation = [
    "About",
    "FAQS",
    "Careerst",
    "Contact",
    "Privacy Policy",
    "Press & Blog",
    "Installments Plan",
    "Terms & Condition",
    "Warranty Center",
  ];

  const [open, setopen] = useState(null);

  const display = (index) => {
    setopen(open === index ? null : index);
  };

  return (
    <div className={`${shows ? "block" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-none z-40"
        onClick={hides}
      ></div>
      <div
        className={`fixed  h-screen w-[358px] bg-white z-50 shadow-lg overflow-y-scroll no-scrollbar scroll-smooth inset-0 `}
      >
        <div className="bg-[#48afff] px-8 pt-[45px] pb-[48px]">
          <div className="flex justify-end">
            <button
              className="rounded-full bg-[#ebebeb] text-[#5b5b5b] text-[11px] p-1 flex text-end"
              onClick={hides}
            >
              <CgClose className="font-bold" />
            </button>
          </div>
          <div className="bg-[#48afff] py-2">
            <img
              className="md:w-[100px] w-[125px]"
              src="https://static.priceoye.pk/images/logo.svg"
              alt="logo"
            />
          </div>
          <button className="bg-[white] text-[#48afff] hover:bg-[#48afff] hover:text-white w-[110px] h-[40px] text-[13px] rounded border border-white">
            Log in
          </button>
          <div className="mt-[20px] text-white flex flex-col gap-3">
            <button className="flex text-[13px] items-center gap-2 hover:pl-5 duration-300 text-base">
              <CiLocationOn className="text-[30px]" /> Track My Order
            </button>
            <button className="flex text-[13px] items-center gap-2 hover:pl-5 duration-300 text-base">
              <TbFileSpreadsheet className="text-[30px]" /> Launch a Complaint
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] my-7">
          <h1 className="text-[#798e9c] font-[500] pl-[31px] mb-2 text-[13px]">
            CATEGORIES
          </h1>
          {categories.map((item, indexs) => (
            <div
              className={`w-[285px] mx-auto cursor-pointer ${
                open === indexs ? "bg-[#f8f9fa] rounded-xl" : ""
              }`}
              key={indexs}
            >
              <div
                className="flex justify-between items-center rounded-lg py-1 px-4"
                onClick={() => display(indexs)}
              >
                <button className="text-[#777777] flex gap-2 mb-1 text-[13px]">
                  <span className="text-black outline-none">
                    <item.icon size={20} />
                  </span>
                  {item.label}
                </button>
                <IoIosArrowDown
                  size={17}
                  className={`transition-transform duration-300 text-[#202020] ${
                    open === indexs ? "rotate-180" : ""
                  }`}
                />
              </div>
              {open === indexs && (
                <div>
                  <hr className="text-[#cccccc] py-1" />
                  <div className="flex flex-col py-1 px-[21px]">
                    {item.items &&
                      item.items.map((item1, indexs1) => (
                        <p
                          key={indexs1}
                          className="text-[13px] text-[#404040] py-1"
                        >
                          {item1}
                        </p>
                      ))}
                    {item.subButtons &&
                      item.subButtons.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-center gap-2 py-1"
                        >
                          <sub.icon className="text-black" size={18} />
                          <p className="text-[13px] text-[#404040]">
                            {sub.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 py-[45px] pl-[30px]">
          <p className="text-[#6d6d6d] text-[11.5px] font-[500] pb-2">
            POPULAR LISTS
          </p>
          {popularLists.map((list, i) => (
            <p
              key={i}
              className="text-[#6d6d6d] text-[13px] font-[500] cursor-pointer w-fit border border-[#6d6d6d] py-[3px] px-[13px] rounded-[5px] hover:text-white hover:bg-[#48afff]"
            >
              {list}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2 pl-[30px] py-10">
          <p className="text-[#8599a5] text-[11.5px] font-[500]">
            MAIN NAVIGATION
          </p>
          {navigation.map((nav, i) => (
            <p
              key={i}
              className="text-[#6d6d6d] text-[13px] cursor-pointer hover:text-[#48afff]"
            >
              {nav}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
