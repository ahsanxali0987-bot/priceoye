import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-[9.5px] rounded-sm opacity-100 transition z-10 
    hover:bg-black hidden md:block"
  >
    <FaArrowLeft size={15} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-[9.5px] rounded-sm opacity-100 transition z-10 
    hover:bg-black hidden md:block"
  >
    <FaArrowRight size={15} />
  </button>
);

const SimpleSlider = () => {
  const categories = [
    {
      name: "Mobiles",
      img: "https://static.priceoye.pk/images/home/mobiles.webp",
    },
    {
      name: "Wireless Earbuds",
      img: "https://static.priceoye.pk/images/home/wireless-earbuds.webp",
    },
    {
      name: "Smart Watches",
      img: "https://static.priceoye.pk/images/home/smart-watches.webp",
    },
    {
      name: "Trimmers",
      img: "https://static.priceoye.pk/images/home/trimmers-shaver.webp",
    },
    {
      name: "Power Banks",
      img: "https://static.priceoye.pk/images/home/power-banks.webp",
    },
    {
      name: "Mobile Chargers",
      img: "https://static.priceoye.pk/images/home/mobile-chargers.webp",
    },
    {
      name: "Bluetooth Speakers",
      img: "https://static.priceoye.pk/images/home/bluetooth-speakers.webp",
    },
    {
      name: "Tablets",
      img: "https://static.priceoye.pk/images/home/tablets.webp",
    },
    {
      name: "Laptops",
      img: "https://static.priceoye.pk/images/home/laptops.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 7, slidesToScroll: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 2, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3.5, slidesToScroll: 2, arrows: false },
      },
    ],
  };

  return (
    <div className="bg-white h-[80px] px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-[1210px] mx-auto relative">
        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="outline-none cursor-pointer group hover:border-b-[3px] hover:border-[#48afff] hover:bg-[#f1f3f6]"
            >
              <div className="flex flex-col items-center justify-center text-center py-[6px]">
                <div>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-[45px] h-[45px] object-contain"
                  />
                </div>
                <p className="text-[12.5px] font-[370] text-[#404040]">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
