import React, { useState } from "react";
import Footer3 from "./Footer3";
import Procedures from "./Procedures";
import { CgLoadbar } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const Faqs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Shipping, Order Tracking & Delivery",
      answer: [
        {
          q: "How much does Priceoye charge for delivering products?",
          ans: "Our delivery charges is 149. Rs 300 is added in case of choosing Open Parcel as delivery method.",
        },
        {
          q: "Does Priceoye ship internationally?",
          ans: "We only deliver in the cities of Pakistan currently.",
        },
        {
          q: "How can I track my order from Priceoye online?",
          ans: "You can track your order by logging into your Priceoye account and visiting the 'My Orders' section.",
          link: "https://priceoye.pk/account",
        },
        {
          q: "How can I view my Order Packaging Video?",
          ans: "You can now view the order packaging video once your order is in transit by visiting your Priceoye.pk Account.",
          link: "https://priceoye.pk/account/orders",
        },
      ],
    },
    {
      question: "Payments",
      answer: [
        {
          q: "How can I pay online for the product I purchased from Priceoye?",
          ans: "You can pay online through One Link, Mastercard or Visa Card.",
        },
        {
          q: "Can I pay through Cash on Delivery?",
          ans: "You can pay for the product online as well as make payment on delivery.",
        },
        {
          q: "How can I pay for my order at Priceoye?",
          ans: "You can make payment by using following options",
          list: [
            "Cash On Delivery",
            "Bank Transfer",
            "Credit/Debit",
            "Installments",
          ],
        },
        {
          q: "Does Priceoye offer installments?",
          ans: "You can now buy your desired items on installments from Priceoye.pk. For details visit",
          link: "https://priceoye.pk/bnpl",
        },
        {
          q: "What is the eligibility criteria to avail Easy Monthly Installment plan (EMI)?",
          ans: "Easy Monthly Installment plan (EMI) is available for credit card holders. EMI plan applies for all products with a value of Rs 10,000 or above.",
        },
        {
          q: "What happens if a bank rejects EMI conversion?",
          ans: "Customer needs to pay the full amount of the transaction to the bank, since the EMI facility is at sole discretion of the issuing bank, please contact your card issuing bank.",
        },
      ],
    },
    {
      question: "Cancellations and Modifications",
      answer: [
        {
          q: "How do I cancel my order on Priceoye?",
          ans: "You can cancel your order by calling us directly on our helpline at 051-111 693 693. If your order has already been dispatched, you can refuse to accept the order at the time of delivery and return it to our Rider. Our team will identify your order as canceled, and the advance payment will be reimbursed.",
        },
        {
          q: "Can I modify the shipping address of my order after it has been placed?",
          ans: "Once the order has been placed, you cannot change the delivery address. You have to cancel the order and re-order the product with the correct address. The already made payments will be refunded to you.",
        },
        {
          q: "I just canceled my order. When will I receive my refund?",
          ans: "We typically process returns within 3-5 business days after the courier delivers the item to our Returns Center. When we complete processing your return, we issue a refund. The refund time varies with the method of Refund. View more",
        },
        {
          q: "Would the consumer receive their entire payment if they cancel a paid order?",
          ans: "In case of order cancellation by Customer, Processing fee will not be refunded.",
        },
      ],
    },
    {
      question: "COUPONS",
      answer: [
        {
          q: "How do I apply a coupon on my order?",
          ans: "You can apply a coupon on the cart page before order placement. Simply enter the coupon code and click on the apply tab.",
        },
      ],
    },
    {
      question: "Sign Up and Login",
      answer: [
        {
          q: "How do I create an account on Priceoye?",
          ans: "Please visit our login page priceoye.pk/login. You will be given an OTP. Enter OTP. Click Register and fill out all of the required information. Your account has been created.",
        },
        {
          q: "What if I don't receive an OTP due to poor network connectivity?",
          ans: "Click on the resend button and wait for sometime.",
        },
        {
          q: "Do I need to provide email to create an account on Priceoye?",
          ans: "Providing an email is mandatory to create an account on Priceoye. You will be receiving your order details via email.",
        },
      ],
    },
    {
      question: "Buy Now Pay Later at Installments",
      answer: [
        {
          q: "Does Priceoye offer installments?",
          ans: "You can now buy your desired items on installments from Priceoye.pk.For details visit https://priceoye.pk/bnpl",
        },
      ],
    },
    {
      question: "Returns and Replacement",
      answer: [
        {
          q: "What is Priceoye's Return and Replacement Policy?",
          ans: "The product can be returned or exchanged in the following cases only:",
          list: [
            "The product is different from what was mentioned on the website.",
            " A defective/damaged product has been received.",
          ],
        },
        {
          q: "Can I return the product to Priceoye if I don't like it?",
          ans: "You can only return the product if it is faulty.",
        },
        {
          q: "How long would it take me to receive the refund/replacement of the returned product?",
          ans: "It can take 5 to 7 working days for a refund or replacement.",
        },
        {
          q: "Does Priceoye pick up the product I want to return from my location?",
          ans: "For return pick up a CN will be shared with you via email and you will be requested to visit your nearest courier office to return the product. For more details Return Process.",
        },
        {
          q: "Why has my return request been declined?",
          ans: "",
          list: [
            "Your return request would have been declined for following reasons:",
            "No Unboxing Video",
            "Issue not reported within 3 days time",
            "Issue is not valid for return",
          ],
        },
        {
          q: "Where can I find the refund form?",
          ans: "Select Refund Orders and click on the Request Refund button. This will display a form where you can fill in the required details to initiate the refund process.",
        },
      ],
    },
    {
      question: "Open Parcel Delivery",
      answer: [
        {
          q: "Does Priceoye offer Open Parcel Delivery?",
          ans: "Yes, Priceoye offers Open Parcel Delivery at the time of delivery in the cities of Islamabad, Rawalpindi, Lahore, and Karachi.",
        },
        {
          q: "What are the service charges for Open Parcel Delivery?",
          ans: "Priceoye will charge Rs 300 for Open Parcel Delivery.",
        },
        {
          q: "Can I open the box of product or remove the seal before paying?",
          ans: "Open Parcel Delivery is an exclusive service of Priceoye which ensures that you only receive what you ordered. You can check the condition of the box, the company's seal, and the colour mentioned on the pin-packed mobile box, but you cannot break the seal of the mobile box to check the inner physical appearance, components, or the functioning of the product.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <article className="max-w-[1050px] m-auto">
        <h1 className="text-center font-[500] text-[22px] py-[20px]">
          Frequently Asked Questions
        </h1>
        <div className="">
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
                    <span className={`text-[14px] font-[500] text-[#202020]`}>
                      {item.question}
                    </span>
                  </div>
                </div>
                {activeQuestion === index && (
                  <div className="text-[12.6px] text-[#202020] mt-4 animate-fadeIn">
                    {item.answer.map((ansitem, ansindex) => (
                      <div className="mb-4" key={ansindex}>
                        <h3 className="font-[600] text-black mb-1">
                          {ansitem.q}
                        </h3>
                        {ansitem.ans && (
                          <p className="text-[#707070] leading-relaxed">
                            {ansitem.ans}
                          </p>
                        )}
                        {ansitem.list && (
                          <ul className="list-decimal list-inside ml-5 mt-2 space-y-1">
                            {ansitem.list.map((listItem, i) => (
                              <li
                                key={i}
                                className="text-[#606060] text-[12.5px]"
                              >
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                        {ansitem.link && (
                          <a
                            href={ansitem.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#4b99e2] hover:underline mt-2 inline-block font-[500]"
                          >
                            {ansitem.link}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
      <Procedures />
      <Footer3 />
    </div>
  );
};

export default Faqs;
