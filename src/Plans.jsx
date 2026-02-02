import React, { useState } from "react";
import Footer3 from "./Footer3";
import { FaPlus } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";
import Procedures from "./Procedures";

const Plans = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const banks = [
    "Askari Bank",
    "Bank Alfalah",
    "Faysal Bank",
    "HBL",
    "JS Bank",
    "MCB",
    "SCB",
    "SilkBank",
    "UBL",
  ];

  const steps = [
    "To buy from Priceoye on (EMI) installment, first choose your product and add it to your cart.",
    "The cart should only contain one product worth at least PKR 10,000.",
    "Click Check Out, proceed to Payment, and choose Installment as your payment method.",
    "Choose your bank, the length of your EMI, and enter your credit card information.",
    "A code will be sent to your registered phone number and email address. Enter the code and place your order.",
    "Please remember that your EMI plan may take up to 7 working days to activate. This is the time between placing your order and receiving your bill. Once your EMI plan has processed, you will receive a SMS from your bank.",
  ];

  const questions = [
    {
      q: "I was trying to process my order on BNPL but my session expired. What should I do now?",
      ans: "You can now proceed with the pending payment by logging into your profile and clicking on the Pay Now option. Account",
    },
    {
      q: "Can I opt for an installment plan with my debit card?",
      ans: "You can only choose an installment plan if you have a credit card.",
    },
    {
      q: "Why has my full amount been reserved by the bank?",
      ans: "The complete payment of your purchase is reserved by your Bank and not deducted. The Bank then releases the amount to the available limit as the installment plan successfully proceeds toward its completion. You can contact your bank for further verification.",
    },
    {
      q: "Do you offer installments for HBL Bank?",
      subans: [
        "Askari Bank",
        "Bank Alfalah",
        "Faysal Bank",
        "HBL",
        "JS Bank",
        "MCB",
        "SCB",
        "SilkBank",
        "UBL",
      ],
    },
    {
      q: "Will my processing fee and installment amount be refunded if I cancel my BNPL Order?",
      ans: "On cancellation of an order by the customer, the processing fee will be non-refundable. Whereas cancellation of the order by the company for reasons like out of stock or unforeseen events, the company will return the total amount along with the processing fee.",
    },
    {
      q: "Why is my BNPL request cancelled?",
      ans: "BNPL orders do not proceed if the total amount to be paid exceeds your card limit. The total amount includes (product price + EMI plan chosen + Processing fee + service charges).",
    },
  ];

  return (
    <div className="bg-white min-h-screen no-scrollbar overflow-y-auto">
      <article className="p-[28px] max-w-[1110px] m-auto">
        <div>
          <img
            src="https://static.priceoye.pk/images/bnpl_banner/static-banner-wb-bnpl-v10.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-center">
            <h1 className="text-[20px] font-[500] py-3">
              Buy Now & Pay Later | Easy Monthly Installments at Priceoye
            </h1>
          </div>
          <div className="">
            <div className="">
              <p className="text-[#202020] text-[12.6px] leading-[18px]">
                Priceoye offers Easy Monthly Installments with an easy
                interest-free payment plan to enable its customers to access and
                purchase the items they want and need while managing their
                finances during the turbulent economy. With multiple payment
                tenures and easy interest-free installments it intends to help
                people spend responsibly without incurring interest or extended
                debt.
              </p>
              <p className="text-[#202020] text-[12.6px] leading-[18px]">
                Easy Monthly Installment plan (EMI) is available for credit card
                holders. EMI plan applies for all products with a value of PKR
                10,000 or above. Please click the links below to reach terms and
                conditions of the specific plan.
              </p>
            </div>
          </div>
          <div className="max-w-xs">
            <ul className="space-y-2 text-[#48b7ff] text-[12px]">
              {banks.map((bank, index) => (
                <li key={index} className="cursor-pointer hover:underline">
                  {index + 1} - {bank}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <article className="w-full flex justify-center mt-10">
          <div className="w-full max-w-[800px] aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              src="https://www.youtube.com/embed/YQCeiwkLvEk"
              title="How to buy on EMI"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </article>
        <hr className="bg-[#48afff] h-[2px] my-5" />
        <div className="">
          <img
            src="https://static.priceoye.pk/images/bnpl_banner/installment-banner-wb.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="flex  flex-col gap-3 mt-6">
          <h1 className="text-[#202020] font-[500] text-[16px]">
            How to buy on installments from Priceoye.pk?
          </h1>
          <ul className="space-y-3 text-sm text-gray-800 leading-[12px]">
            {steps.map((step, index) => (
              <li className="text-[#202020] text-[12.6px]" key={index}>
                {index + 1} - {step}
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-[#47b6ff]">
            *Terms and conditions apply.
          </p>
        </div>
      </article>
      <article className="max-w-[1000px] m-auto mb-20 px-5 md:px-0">
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

export default Plans;
