import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "Mobiles", img: "https://static.priceoye.pk/images/home/mobiles.webp" },
  { name: "Wireless Earbuds", img: "https://static.priceoye.pk/images/home/wireless-earbuds.webp" },
  { name: "Smart Watches", img: "https://static.priceoye.pk/images/home/smart-watches.webp" },
  { name: "Trimmers", img: "https://static.priceoye.pk/images/home/trimmers-shaver.webp" },
  { name: "Power Banks", img: "https://static.priceoye.pk/images/home/power-banks.webp" },
  { name: "Mobile Chargers", img: "https://static.priceoye.pk/images/home/mobile-chargers.webp" },
  { name: "Bluetooth Speakers", img: "https://static.priceoye.pk/images/home/bluetooth-speakers.webp" },
  { name: "Tablets", img: "https://static.priceoye.pk/images/home/tablets.webp" },
  { name: "Laptops", img: "https://static.priceoye.pk/images/home/laptops.webp" },
];

const CategorySlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-3 relative">
      <div className="max-w-[1210px] mx-auto px-4 relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-sm z-10"
        >
          <FaArrowLeft size={14} />
        </button>

        {/* Scroll Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="snap-start shrink-0 w-[80px] cursor-pointer group text-center"
            >
              <div className="flex flex-col items-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-[45px] h-[45px] object-contain"
                />
                <p className="text-[12px] text-[#404040] mt-1 group-hover:text-[#48afff]">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-sm z-10"
        >
          <FaArrowRight size={14} />
        </button>

      </div>
    </div>
  );
};

export default CategorySlider;