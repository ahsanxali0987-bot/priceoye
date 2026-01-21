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
      icon: <FiSmartphone />,
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
        <div className="flex flex-col gap-[5px] p-[30px]">
          <h1 className="text-[#798e9c] font-[550] mb-1 text-[13px]">
            CATEGORIES
          </h1>
          {categories.map((item, indexs) => (
            <div key={indexs}>
              <div
                className="flex items-center justify-between cursor-pointer py-2"
                onClick={() => display(indexs)}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-[15px]">{item.label}</p>
                </div>
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    open === indexs ? "rotate-180" : ""
                  }`}
                />
              </div>
              {open === indexs && (
                <div className="ml-6 flex flex-col gap-1 text-[14px] text-[#555]">
                  {item.items.map((item1, indexs1) => (
                    <p
                      key={indexs1}
                      className="cursor-pointer hover:text-black"
                    >
                      {item1}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-[20px]">
          <p className="text-[#6d6d6d] text-[15px]">POPULAR LISTS</p>
          {popularLists.map((list, i) => (
            <p
              key={i}
              className="text-[#6d6d6d] text-[13px] cursor-pointer w-fit border border-[#6d6d6d] py-1 px-3 rounded-md hover:text-white hover:bg-[#48afff]"
            >
              {list}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-[20px]">
          <p className="text-[#6d6d6d] text-[15px]">MAIN NAVIGATION</p>
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
