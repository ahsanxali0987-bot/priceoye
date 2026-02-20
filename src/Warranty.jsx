import React from "react";
import { FaArrowUp } from "react-icons/fa";

const centers = [
  {
    title: "Apple",
    desc: "Future Tech is an authorized service provider of all the Apple products in Pakistan.",
  },
  {
    title: "Audionic",
    desc: "Audionic Customer Care Centers & Warranty Claim service centers all over Pakistan.",
  },
  {
    title: "Dany",
    desc: "Find a store near you for claiming any kind of warranty regarding repair and replacement of your Dany Product.",
  },
  {
    title: "Decode",
    desc: "United Mobiles is Dcode's official warranty centre for all technical support such as software upgrades, parts replacement, and phone replacement",
  },
  {
    title: "Digit",
    desc: "Digit support centers are a one-stop shop for all solutions to any kind of phone problem.",
  },
  {
    title: "Huawei",
    desc: "Contact the HUAWEI service center for information on warranty and system updates, product support, after-sales service, check and repair. HUAWEI Service Center in Pakistan is provided by Global Customer Care. If needed, please contact:",
  },
  {
    title: "Infinix",
    desc: "Carlcare provides Infinix Phone Repair, including screen replacement and fixing battery problem.",
  },
  {
    title: "Itel",
    desc: "Carlcare provides Itel Phone Repair, including screen replacement and fixing battery problem.",
  },
  {
    title: "Nokia",
    desc: "If you're in need of a Nokia phone repair or simply need help with your phone, enter your location to find a Nokia service center near you today. Advance Telecom is also an official warranty centre for Nokia mobiles.",
  },
  {
    title: "Oppo",
    desc: "OPPO support provides online services including warranty status, repair price, troubleshooting, software downloads, and more.",
  },
  {
    title: "Realme",
    desc: "Find a Realme service center to schedule a repair for your device and services such as Search Support, FAQ, troubleshooting, User Guide, Service Center, Software Upgrade, Callme Service, etc.",
  },
  {
    title: "Samsung",
    desc: "Whether it's a product repair or just some help and advice. There are over 176 authorized support centers across the PK that can help you.",
  },
  {
    title: "Sparx",
    desc: "Sparx Warranty center provides help required for technical assistance or any such problem covered by the brand's warranty.",
  },
  {
    title: "Tecno",
    desc: "TECNO support provides online services including warranty status, repair stores, troubleshooting, software downloads, and more. Carl care provides Tecno Phone Repair, including screen replacement and fixing battery problems.",
  },
  {
    title: "Vgotel",
    desc: "If you have purchased VGOTEL smartphones or mobile phones from our online store, you can check with our Customer Service for technical help or service issues.",
  },
  {
    title: "nus",
    desc: "Find a VNUS service center near you for device repair and other warranty services.",
  },
  {
    title: "Xiaomi",
    desc: "Xiaomi has more than 100 authorized service centers in Pakistan where you can repair your phone or check any hardware problem.",
  },
  {
    title: "ZTE",
    desc: "ZTE Warranty and Service centers are located in various parts of Pakistan for phone repair services, spare parts availability, and replacement.",
  },
];

const Warranty = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white relative min-h-screen px-8">
      <button
        onClick={scroll}
        aria-label="Scroll to top"
        className="fixed bottom-14 right-8 z-50 p-[10px] bg-[#6b6b6b] text-white shadow-2xl transition-all duration-300 hover:p-3 active:scale-90 opacity-100"
      >
        <FaArrowUp size={20} />
      </button>
      <h1 className="text-[22px] font-[500] text-center py-10">
        Warranty Center
      </h1>
      <article>
        <h1 className="text-[18px] font-[500]">Warranty center locations</h1>
        <div className="flex flex-col gap-4 py-5">
          {centers.map((center, index) => {
            return (
              <div className="flex flex-col gap-2" key={index}>
                <div className="py-2" key={index}>
                  <h2 className="text-[14px] text-[#48afff] font-[400]">
                    {center.title}
                  </h2>
                  <p className="text-[12px] text-gray-600">{center.desc}</p>
                </div>
                <div className="bg-[white] border-[1px] border-[#f88b2a] hover:bg-[#f88b2a] w-fit rounded-md">
                  <button className=" text-[#f88b2a]  text-[15px] px-2 hover:text-[white] ">
                    View Online Center
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Warranty;
