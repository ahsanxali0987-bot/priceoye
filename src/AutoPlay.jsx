import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const bannerImages = [
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-ljn50.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-8d5ll.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-p1zzf.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-l2pz1.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-efde3.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-itb1m.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-10afw.webp",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-thnsh.jpg",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-1o1v2.jpg",
  "https://images.priceoye.pk/banners/pakistan-priceoye-slider-jdzq6.webp",
];

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

function AutoPlay() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-container w-full group md:relative mt-4">
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index} className="outline-none">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
