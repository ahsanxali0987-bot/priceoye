import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer3 from "./Footer3";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I track my order?",
      answer: (
        <>
          You can track your order now by logging into your Priceoye Account.{" "}
          <Link to="/Login">
            <span className="text-[#48afff]">Account</span>
          </Link>
        </>
      ),
    },
    {
      question: "How can I cancel my order?",
      answer: (
        <>
          <p>
            In case your order has not been dispatched, you can cancel your
            order by calling us directly on our helpline at 051-111-693-693.
          </p>
          <p>
            If your order has already been dispatched, you have the option to
            refuse delivery and your advance payment will be reimbursed.
          </p>
        </>
      ),
    },
    {
      question: "How can I register a complaint?",
      answer: (
        <>
          Please log in to My Account {">"} Complaints {">"} Add Complaint.{" "}
          <Link to="/Login">
            <span className="text-[#48afff]">Account</span>
          </Link>
        </>
      ),
    },
    {
      question: "How can I find the location of my brand's warranty centre?",
      answer: (
        <>
          <p>Please click the information:</p>
          <Link to="/bnpl">
            <p className="text-[#48afff]">Warranty Center</p>
          </Link>
        </>
      ),
    },
    {
      question: "What can I do if my desired product is out of stock?",
      answer:
        "Click the Request Mobile Option underneath the product. We will notify you within 7 days.",
    },
    {
      question:
        "How do I change the shipping address on a previously placed order?",
      answer:
        "Once placed, you cannot change the address. Cancel and reorder with correct details.",
    },
    {
      question: "What is Priceoye's Return Policy?",
      answer: (
        <>
          Find details by visiting{" "}
          <Link to="/return-policy">
            <span className="text-[#48afff]">Return Policy</span>
          </Link>
        </>
      ),
    },
    {
      question: "Why is there no warranty card in the box?",
      answer:
        "Paper warranty cards are replaced with e-warranty activated once SIM is inserted.",
    },
    {
      question: "How many days will it take for my payment to be refunded?",
      answer: (
        <>
          It usually takes 3-15 days. Visit{" "}
          <Link to="/refund-policy">
            <span className="text-[#48afff]">Refund Policy</span>
          </Link>
        </>
      ),
    },
    {
      question: "How can I get more details about the installment plan?",
      answer: (
        <>
          EMI is available for credit card holders. Click{" "}
          <Link to="/bnpl">
            <span className="text-[#48afff]">BNPL</span>
          </Link>
        </>
      ),
    },
    {
      question:
        "Can I change the colour and storage of my recently placed order?",
      answer:
        "It can only be changed if the order is not shipped and payment not made.",
    },
    {
      question: "What is Open Parcel Delivery?",
      answer:
        "You can check box condition and seal before accepting but cannot break the seal.",
    },
    {
      question: "Why are there no accessories in the box?",
      answer:
        "Some models no longer include headphones or adapters due to sustainability policies.",
    },
    {
      question: "How can I view my Order Packaging Video?",
      answer: (
        <>
          Visit your account and click Order ID.{" "}
          <Link to="/login">
            <span className="text-[#48afff]">Account Orders</span>
          </Link>
        </>
      ),
    },
    {
      question: "Where can I find the refund form?",
      answer:
        "Go to account orders and select Refund Orders then click Request Refund.",
    },
    {
      question: "How to deactivate your Priceoye App account?",
      answer: "Call 051-111-693-693 and customer service will guide you.",
    },
  ];

  const contactInfo = [
    {
      title: "Contact Us",
      icon: <p className="bg-[#49afff] w-[34px] h-[34px] rounded-full"></p>,
      main: "051-111-693-693",
      sub: "9:00AM to 5:00PM [Mon-Sat]",
    },
    {
      title: "Email",
      icon: (
        <p className="bg-[#49afff] w-[34px] h-[34px] rounded-full flex items-center">
          <IoMail size={18} className="text-white m-auto" />
        </p>
      ),
      main: "hello@priceoye.pk",
      sub: "9:00AM to 5:00PM [Mon-Sat]",
    },
  ];

  const locations = [
    {
      img: "https://static.priceoye.pk/images/contact-us/location-pin.svg",
      text: "3 Offices & Expanding",
    },
    {
      img: "https://static.priceoye.pk/images/contact-us/warehouse.svg",
      text: "3 Warehouses across Pakistan",
    },
  ];

  return (
    <div className="bg-white relative min-h-screen ">
      <div className="max-w-[1050px] m-auto">
        <button
          onClick={scroll}
          aria-label="Scroll to top"
          className="fixed bottom-14 right-8 z-50 p-[10px] bg-[#6b6b6b] text-white shadow-2xl transition-all duration-300 hover:p-3 active:scale-90 opacity-100"
        >
          <FaArrowUp size={20} />
        </button>
        <article>
          <h1 className="text-center text-2xl font-semibold pt-5">
            Got any Questions? We'd love to hear.
          </h1>
          <p className="text-center text-[17px] my-4">
            Whether you're curious about our service, your order status, or
            returns – we're ready to answer any and all questions
          </p>
        </article>
        <article className="mb-5 max-w-[1050px] m-auto">
          <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {faqs.map((item, index) => (
              <div key={index}>
                <div className="border-b border-[#a3a3a3] pb-3">
                  <div
                    className="flex items-center cursor-pointer gap-2"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span>
                      {openIndex === index ? (
                        <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                          <CgLoadbar size={20} />
                        </div>
                      ) : (
                        <div className="font-[500] text-[#707070] w-[35px] h-[35px] flex items-center justify-center">
                          <FaPlus />
                        </div>
                      )}
                    </span>
                    <span className="text-[14px] font-[500] text-[#202020]">
                      {item.question}
                    </span>
                  </div>
                </div>
                <p
                  className={`text-[14px] my-5 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </article>
        <article className="my-10">
          <span>
            <h1 className="text-[#48afff] text-center font-semibold text-[30px]">
              Get in touch
            </h1>
          </span>
          <div className="flex justify-between gap-10 mt-10 flex-col md:flex-row">
            {/* Left Side */}
            <div className="mb-20">
              <h1 className="text-[18px] font-semibold my-4">
                Still need help?
              </h1>
              <div className="gap-3 flex flex-col">
                {contactInfo.map((item, index) => (
                  <span key={index} className="gap-1 flex flex-col">
                    <h1 className="text-[13px] font-semibold">{item.title}</h1>
                    <div className="flex gap-3">
                      {item.icon}
                      <div className="leading-[18px]">
                        <p className="text-[13px] font-semibold">{item.main}</p>
                        <p className="text-[#757575] text-[13px]">{item.sub}</p>
                      </div>
                    </div>
                  </span>
                ))}
              </div>
            </div>
            {/* Right Side */}
            <div className="w-[500px]">
              <h1 className="text-[18px] font-semibold my-4">Our Locations</h1>
              <div className="flex gap-4">
                {locations.map((item, index) => (
                  <div
                    key={index}
                    className="w-[170px] h-[140px] rounded-lg shadow-lg shadow-[#48afff] p-3"
                  >
                    <img src={item.img} alt="" className="w-[60px] h-[60px]" />
                    <p className="text-[14px] mt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Updates Section */}
          <span className="leading-[40px]">
            <h1 className="text-[18px] font-semibold">Updates</h1>
            <p className="text-[12px]">
              To stay up to date on what's new, please subscribe to our social
              media channels <span className="text-[#48afff]">Instagram</span>,{" "}
              <span className="text-[#48afff]">Youtube</span> and{" "}
              <span className="text-[#48afff]">Facebook</span>.
            </p>
          </span>
        </article>
      </div>
      <Footer3 />
    </div>
  );
};

export default Contact;
