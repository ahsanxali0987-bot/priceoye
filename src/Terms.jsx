import React, { useState } from "react";
import Footer3 from "./Footer3";
import Procedures from "./Procedures";
import { CgLoadbar } from "react-icons/cg";
import { FaArrowUp, FaPlus } from "react-icons/fa";

const Terms = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      q: "INTRODUCTION",
      ans: `Welcome to Priceoye.pk also hereby known as "we", "us" or "Priceoye". We are an online marketplace and these are the terms and conditions governing your access and use of Priceoye along with its related sub-domains, sites, mobile app, services and tools (the "Platform"). By using the Platform, you hereby accept these terms and conditions (including the linked information herein) and represent that you agree to comply with these terms and conditions (the "User Agreement"). This User Agreement is deemed effective upon your use of the Platform which signifies your acceptance of these terms. If you do not agree to be bound by this User Agreement please do not access, register with or use this Platform. This Platform is owned and operated by Priceoye Technologies Pvt Limited. The Platform reserves the right to change, modify, add, or remove portions of these Terms and Conditions at any time without any prior notification.`,
    },
    {
      q: "CONDITIONS OF USE",
      ans: "",
    },
    {
      q: "BUYER POLICY",
      ans: "",
    },
  ];

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="bg-white relative min-h-screen">
      <button
        onClick={scroll}
        aria-label="Scroll to top"
        className="fixed bottom-14 right-8 z-50 p-[10px] bg-[#6b6b6b] text-white shadow-2xl transition-all duration-300 hover:p-3 active:scale-90 opacity-100"
      >
        <FaArrowUp size={20} />
      </button>
      <article className="max-w-[1050px] m-auto">
        <h1 className="text-center font-[500] text-[22px] py-[20px]">
          Terms and Conditions
        </h1>
        <p className="text-[12.6px] text-center text-gray-600">
          By using Priceoye.pk ('Site) or Priceoye App ('App') collectively
          referred to as the 'Platform', you agree to these terms and
          conditions, privacy policy, returns and refund policy of the Platform.
          Please read the Terms and Conditions carefully before using
          Priceoye.pk.
        </p>
      </article>
      <article className="max-w-[1000px] m-auto my-10 px-5 md:px-0">
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {questions.map((item, index) => (
            <div key={index}>
              <div className="border-b border-[#a3a3a3] pb-3">
                <div
                  className="flex items-center cursor-pointer gap-2"
                  onClick={() => toggleQuestion(index)}
                >
                  <div>
                    {activeQuestion === index ? (
                      <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                        {" "}
                        <CgLoadbar size={20} />{" "}
                      </div>
                    ) : (
                      <div className="text-[#707070] font-[500]">
                        {" "}
                        <FaPlus size={20} />{" "}
                      </div>
                    )}
                  </div>
                  <span className={`text-[14px] font-[500]`}>{item.q}</span>
                </div>
              </div>
              {activeQuestion === index && (
                <div className="text-[12.6px] text-[#202020] mt-4 animate-fadeIn">
                  {item.ans}
                </div>
              )}
              {activeQuestion === index && item.subans && (
                <div className="mt-2 ml-4 space-y-1 animate-fadeIn">
                  {item.subans.map((subitem, subindex) => (
                    <div key={subindex} className="text-[12px] text-[#202020]">
                      {index + 1} - {subitem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
      <Procedures />
      <Footer3 />
    </div>
  );
};

export default Terms;
