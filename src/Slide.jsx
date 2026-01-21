import React from "react";
import Slider from "react-slick";

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

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white h-[80px] ">
      <div className="max-w-[1210px] mx-auto">
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
