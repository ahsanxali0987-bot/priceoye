import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Footer3 from "./Footer3";

const About = () => {
  const ABOUT_DATA = {
    categories: [
      {
        src: "https://static.priceoye.pk/images/about-icon-mobile.svg",
        title: "mobile",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-laptop.svg",
        title: "laptop",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-tablet.svg",
        title: "tablet",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-smartwatch.svg",
        title: "smart watches",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-earbud.svg",
        title: "wireless earbuds",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-speakers.svg",
        title: "bluetooth speaker",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-powerbank.svg",
        title: "power banks",
      },
      {
        src: "https://static.priceoye.pk/images/about-icon-cable.svg",
        title: "charging cables",
      },
    ],

    features: [
      {
        id: 1,
        type: "text",
        title: "Open Parcel Delivery",
        desc: "An exclusive service of Priceoye to let you open the packaging of the parcel before payment.",
      },
      {
        id: 2,
        type: "image",
        src: "https://static.priceoye.pk/images/about-open-parcel.png",
      },
      {
        id: 3,
        type: "text",
        title: "Packaging Video",
        desc: "We'll share a video proof of your ordered item being packaged in our warehouse before sending you in mail.",
      },
      {
        id: 4,
        type: "image",
        src: "https://static.priceoye.pk/images/about-product-video.png",
      },
      {
        id: 5,
        type: "image",
        src: "https://static.priceoye.pk/images/about-customer-support.png",
      },
      {
        id: 6,
        type: "text",
        title: "Customer Support",
        desc: "We are ready to assist you with any trouble that you may experience while shopping with us",
      },
      {
        id: 7,
        type: "image",
        src: "https://static.priceoye.pk/images/about-return-parcel.png",
      },
      {
        id: 8,
        type: "text",
        title: "Easy Returns",
        desc: "We make it simple to return items in just a few days with our easy return policy.",
      },
    ],

    stats: [
      { value: "140", label: "Cities" },
      { value: "100", label: "Districts" },
      { value: "5", label: "Provinces" },
    ],

    payments: [
      {
        img: "https://static.priceoye.pk/images/about-payment-debit.png",
        label: "Credit/Debit Card",
      },
      {
        img: "https://static.priceoye.pk/images/about-payment-bank.png",
        label: "Bank Transfer",
      },
      {
        img: "https://static.priceoye.pk/images/about-payment-cash.png",
        label: "Cash on Delivery",
      },
      {
        img: "https://static.priceoye.pk/images/about-payment-installment.png",
        label: "Instalments",
      },
    ],

    recognitions: [
      {
        img: "https://static.priceoye.pk/images/recognitions/Pasha.png",
        text: "Gold in Market Places (2020 -21 )",
      },
      {
        img: "https://static.priceoye.pk/images/recognitions/30under30.png",
        text: "Forbes Asia '30 under 30' (2018)",
      },
      {
        img: "https://static.priceoye.pk/images/recognitions/apicta-award.png",
        text: "Merit Award (2018)",
      },
      {
        img: "https://static.priceoye.pk/images/recognitions/union-award.png",
        text: "International Telecom Union Award - Geneva",
      },
      {
        img: "https://static.priceoye.pk/images/recognitions/Startup_cup_logo.png",
        text: "Pakistan Startup Cup (2017-18)",
      },
    ],

    featuredBy: [
      "dawn",
      "nation",
      "tribune",
      "menabytes",
      "recorder",
      "propakistani",
      "techjuice",
      "paktoday",
      "dunya",
    ],

    values: [
      {
        img: "https://static.priceoye.pk/images/value-img-1.svg",
        label: "Inspired",
        para: "We love to try new things that are connected to something greater.",
      },
      {
        img: "https://static.priceoye.pk/images/value-img-2.svg",
        label: "Authentic",
        para: "We are loyal to our company's mission and values. We strive to be honest and as transparent as we can be.",
      },
      {
        img: "https://static.priceoye.pk/images/value-img-3.svg",
        label: "Tenacious",
        para: "We never settle. We make sure that things get done regardless of how hard they seem to be.",
      },
      {
        img: "https://static.priceoye.pk/images/value-img-4.svg",
        label: "Together",
        para: "We always look out for what our customer needs and together we will make sure that we deliver beyond our promises.",
      },
    ],
  };

  const [showButton, setShowButton] = useState(false);

  return (
    <div className="bg-white relative pb-0">
      <button
        className={`fixed bottom-8 right-8 z-50 p-[10px] bg-[#6b6b6b] text-white shadow-2xl transition-all duration-300 hover:p-3 active:scale-90 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <FaArrowUp size={20} />
      </button>
      <article className="bg-[url('https://static.priceoye.pk/images/about-img-banner.webp')] min-h-screen bg-no-repeat bg-cover bg-center flex relative">
        <div className="bg-black/40 w-full min-h-screen">
          <div className="px-6 top-[150px] ml-[0px]  md:ml-[135px] max-w-[440px] absolute">
            <h1 className="font-[600] text-[30px] md:text-[40px] text-white leading-tight">
              Buying Made Simple.{" "}
              <span className="text-[#48afff]">Everyday.</span>
            </h1>
            <p className="font-[400] text-[23px] text-white mt-4 leading-[25px]">
              Compare prices, order and buy mobile phones, electronics,
              appliances, and accessories online.
            </p>
          </div>
        </div>
      </article>
      <article className="bg-[#eef7ff] py-20">
        <div className="text-center pb-20">
          <h1 className="text-[31px] font-[500]">
            We meet all your buying needs Head On
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] max-w-[1040px] m-auto px-3 md:px-0">
          {ABOUT_DATA.categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-[20px] md:p-[50px] rounded-3xl gap-3 shadow-lg shadow-[#e5f0f6]"
            >
              <img src={cat.src} alt={cat.title} className="w-24 h-24 mb-2" />
              <p className="capitalize text-[15px] font-[500]">{cat.title}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="py-20 max-w-[1060px] m-auto">
        <h1 className="text-[30px] font-[500] text-center pb-10">
          Making online shopping <br /> Reliable and Simpler
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4">
          {ABOUT_DATA.features.map((item) => (
            <div key={item.id} className="h-[310px] flex justify-center">
              {item.type === "text" ? (
                <div className="bg-[#f6fbff] p-5 flex flex-col gap-1 justify-center w-full">
                  <h1 className="text-[17px] font-[500]">{item.title}</h1>
                  <p className="text-[15px] leading-[19px]">{item.desc}</p>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="h-[full] w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </article>
      <article className="bg-[#f7fbff] min-h-screen bg-no-repeat bg-cover bg-center">
        <div className="text-center py-16">
          <h1 className="text-[31px] font-[500]">
            Delivering all across Pakistan
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 lg:gap-10 max-w-[700px] m-auto px-4">
          {ABOUT_DATA.stats.map((item, index) => {
            return (
              <div className="flex flex-col items-center gap-4" key={index}>
                <div className="bg-[#48afff] rounded-full w-[100px] xl:w-[130px] h-[100px] xl:h-[130px] flex items-center justify-center">
                  <p className="text-white text-[31px] font-[600]">
                    {item.value}
                  </p>
                </div>
                <p className="text-[#404040] text-[18px] font-[500] uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="">
          <img
            src="https://static.priceoye.pk/images/bg-deliver-capitals.png"
            alt=""
            className="h-[500px] w-full"
          />
        </div>
      </article>
      <article className="py-20">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-[390px] mx-auto flex flex-col mt-16 px-5">
            <h1 className="text-[25px] lg:text-[31px] font-[500] mb-10 text-center md:text-left">
              Offering shoppers <br /> multiple payment <br /> options
            </h1>
            <div className="flex flex-wrap justify-between gap-8 mb-10">
              {ABOUT_DATA.payments.map((pay, i) => (
                <div
                  key={i}
                  className="text-center flex flex-col gap-2 items-center"
                >
                  <div className="w-[90px] h-[90px] flex items-center rounded-full border-2 border-black">
                    <img
                      src={pay.img}
                      alt={pay.label}
                      className="h-[36px] mx-auto mb-2"
                    />
                  </div>
                  <p className="text-[20px] font-[400]">{pay.label}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://static.priceoye.pk/images/about-cards-payments-latest.webp"
            alt="Payment Cards"
            className="max-w-[800px] w-full"
          />
        </div>
      </article>
      <article className="py-20 bg-[#f7fbff]">
        <div className="flex justify-center">
          <h1 className="text-[31px] font-[500] w-[255px] mb-10 flex">
            Recognitions
          </h1>
        </div>
        <div className="max-w-[920px] m-auto gap-20 grid sm:grid-cols-2 md:grid-cols-3">
          {ABOUT_DATA.recognitions.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-4 text-center"
                key={index}
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-[150px] object-contain"
                />
                <div className="max-w-[200px]">
                  <p className="text-[14px] md:text-[13px] font-[500] text-[#202020]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
      <article className="py-12 px-10 text-center">
        <h1 className="text-[31px] font-[500]">Featured By</h1>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-[990px] mx-auto my-16">
          {ABOUT_DATA.featuredBy.map((brand) => (
            <img
              key={brand}
              src={`https://static.priceoye.pk/images/about_us/${brand}.svg`}
              alt={brand}
              className="h-[55px]"
            />
          ))}
        </div>
      </article>
      <article className="py-20 px-10 text-center bg-[#f7fbff]">
        <h1 className="text-3xl font-[500] mb-12">Our Values</h1>
        <div className="flex flex-wrap justify-between max-w-[780px] mx-auto">
          {ABOUT_DATA.values.map((val, i) => (
            <div key={i} className="flex flex-col items-center w-[300px]">
              <img src={val.img} alt={val.label} className="w-20 md:w-24" />
              <div className="flex flex-col gap-2">
                <p className="text-[15px] text-[#202020] font-[500]">
                  {val.label}
                </p>
                <p className="text-[#202020] text-[13px] hidden md:block">
                  {val.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="w-full bg-[url(https://static.priceoye.pk/images/about-footer-bg.webp)] min-h-screen bg-no-repeat bg-cover bg-center hidden md:block">
        <div className="bg-black/40 w-full min-h-screen flex items-center justify-center">
          <p className="font-[600] text-[48px] text-white leading-tight text-center">
            Simplifying your <br className="hidden md:block" /> Buying Needs
          </p>
        </div>
      </article>
      <Footer3 />
    </div>
  );
};

export default About;
