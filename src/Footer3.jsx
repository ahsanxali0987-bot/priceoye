import React from "react";
import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Footer3 = () => {
  const socialLinks = [
    { icon: <FaYoutube size={18} />, link: "#" },
    { icon: <FaFacebook size={18} />, link: "#" },
    { icon: <AiFillInstagram size={18} />, link: "#" },
    { icon: <IoLogoLinkedin size={18} />, link: "#" },
    { icon: <FaTiktok size={18} />, link: "#" },
  ];

  return (
    <article className="bg-[#3eabff]">
      <div className="py-4 text-white px-4 md:px-8">
        <div className="max-w-[1195px] mx-auto flex md:flex-row justify-between items-center gap-4">
          <div className="flex gap-3 items-center">
            <img
              src="https://static.priceoye.pk/images/about-white-logo.svg"
              alt="Priceoye Logo"
              className="w-10 md:w-12"
            />
            <p className="text-[14px] md:text-[16px] font-[450]">
              Copyright © 2026 Priceoye.pk
            </p>
          </div>
          <ul className="flex gap-3 items-center">
            {socialLinks.map((social, index) => (
              <li
                key={index}
                className="bg-white text-[#3eabff] rounded-full h-5 w-5 flex items-center justify-center hover:bg-opacity-90 transition-all cursor-pointer shadow-sm"
              >
                <a href={social.link} aria-label="Social Link">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Footer3;
