import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#48afff] mt-1">
      <div className="max-w-[1195px] mx-auto px-3">
        <img
          className="w-32 md:w-40 lg:w-42 h-auto block md:hidden pt-9"
          src="https://static.priceoye.pk/images/logo.svg"
          alt="logo"
        />
      </div>
      <div className="py-8 flex flex-wrap justify-between max-w-[1195px] mx-auto px-3">
        <div>
          <img
            className="sm:w-32 md:w-40 lg:w-42 h-auto hidden md:block pb-6"
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
          />
          <ul className="flex flex-col gap-2">
            <li className="text-white text-sm cursor-pointer">About Us</li>
            <li className="text-white text-sm cursor-pointer">FAQS</li>
            <li className="text-white text-sm cursor-pointer">Contact Us</li>
            <li className="text-white text-sm cursor-pointer">Carrees</li>
            <li className="text-white text-sm cursor-pointer">Press & Blog</li>
            <li className="text-white text-sm cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg hidden md:block pb-6">
            Customer Service
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="text-white text-sm cursor-pointer">Help Centre</li>
            <li className="text-white text-sm cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-white text-sm cursor-pointer">
              Installments Plan
            </li>
            <li className="text-white text-sm cursor-pointer">
              E-Warranty Activation
            </li>
            <li className="text-white text-sm cursor-pointer">
              Sell on Priceoye
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-[18px]">Secure Payments Methods</h1>
          <div>
            <img
              src="https://static.priceoye.pk/images/payment_method.svg"
              alt=""
              className="max-h-[35px] object-contain"
            />
          </div>
          <img src="play.png" alt="" className="w-[180px]" />
        </div>
      </div>
      <div className="bg-[#3eabff]  py-4 text-white px-4 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1195px] mx-auto flex justify-around">
          <p className=" text-[14px] cursor-pointer text-white">
            Copyright © 2025 Priceoye.pk
          </p>
          <ul className="flex gap-2 items-center text-[#3eabff]">
            <li className="bg-white rounded-full items-center h-8 w-8 pt-2 pl-2">
              <FaYoutube size={17} />
            </li>
            <li className="bg-white rounded-full items-center h-8 w-8 pt-2 pl-2">
              <FaFacebook size={17} />
            </li>
            <li className="bg-white rounded-full items-center h-8 w-8 pt-2 pl-2">
              <AiFillInstagram size={17} />
            </li>
            <li className="bg-white rounded-full items-center h-8 w-8 pt-2 pl-2">
              <IoLogoLinkedin size={17} />
            </li>
            <li className="bg-white rounded-full items-center h-8 w-8 pt-2 pl-2">
              <FaTiktok size={17} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
