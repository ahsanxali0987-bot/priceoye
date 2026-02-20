import React, { useState } from "react";
import Footer3 from "./Footer3";
import Procedures from "./Procedures";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

const Policy_Data = [
  {
    q: "Scope and updates of this user privacy",
    ans: "This user privacy statement applies to your use of this website and all Priceoye applications, services, products and tools (collectively the Services), regardless of how you access or use these services, including access via mobile devices and apps.",
  },
  {
    q: "Your rights to control your personal information",
    head: "You may have certain legal rights regarding your personal data. you will have the following rights regarding data subjects in Pakistan.",
    answer: [
      {
        p: "If you choose to close your account, we will delete your personal information or de-identify it so that it is anonymous and not attributed to your identity. We will retain your personal information after you have closed your account if reasonably necessary to comply with our legal obligations (including law enforcement requests), meet regulatory requirements, resolve disputes, maintain security, prevent fraud and abuse, enforce our user agreement, or fulfill your request to unsubscribe from further messages from us. We will retain de-personalized information after your account has been closed.",
      },
      {
        p: "You can ask us for a copy of Your personal information.",
      },
      {
        p: "Right to request access to your personal data (commonly known as a data subject access request). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.",
      },
      {
        p: "Right to request correction, change, update or modify information previously provided. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.",
      },
      {
        p: "Right to withdraw your consent to the processing of your personal data at any time. This does not affect the legality of any processing we have already carried out based on the consent given previously.",
      },
    ],
  },
  {
    q: "Controller",
    answer: [
      {
        p: "Priceoye is responsible for the collection and processing of your personal data in connection with the provision of the Services depending on how you use our Services. Full address is as follow:",
      },
      {
        p: "Priceoye Private Limited, Suit 1305, NSTP Nust, Sector H-12, Islamabad Pakistan",
      },
    ],
  },
  {
    q: "Withdraw consent/opt-out",
    head: "You may opt-out of receiving communications from our partners, and from us, by the following means:",
    answer: [
      {
        p: "Click the unsubscribe link in the communication emails you have received from us.",
      },
      {
        p: "We will only collect and process personal information about you where we have lawful bases. Lawful bases include consent (where you have given consent), contract (where processing is necessary for the performance of a contract with you (e.g. to deliver products or services you have requested)) and legitimate interests. Where we rely on your consent to process personal information, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object.",
      },
    ],
  },
  {
    q: "What personal data we collect and process",
    answer: [
      {
        head: "Information posted on Priceoye is obviously publicly available. In order to provide you the services, we may collect, store and process your personal information including but not limited to your account ID, name, gender, age, email address, phone number, postal address or any other required details. Further, we collect, non-personally identifiable information about you in a number of ways, including tracking your activities through your IP address and your mobile device ID. We do not collect any personally identifiable information about you unless you voluntarily submit such information to us, by, for example, filling out a survey or registration form. The types of information that may be requested include your name, and your email address.",
      },
      {
        head: "If you choose to provide us with personal information, you are consenting to the transfer and storage of that information on our servers.",
      },
    ],
  },
  {
    q: "SECURITY",
    answer: [
      {
        head: "Our site has industry standard security measures in place to protect the loss, misuse and alteration of the information under our control. While there is no such thing as perfect security on the internet, we will take all reasonable steps to ensure the safety of your personal information from unauthorized access, usage or disclosure or alteration.",
      },
      {
        head: "While we protect your personal information as per industry standards, you acknowledge that the internet or computer networks are not fully secure and that we cannot provide any absolute assurance regarding the security of your personal information. Therefore, you acknowledge that you shall not hold responsible Priceoye in any manner whatsoever for loss of your information, or any other data, which you share with us or which we have with us if such loss or any damage caused to you because of force majeure events. You further acknowledge that any information (including your personal information) transmitted to us or from your use of the platform will therefore be at your own risk.",
      },
      {
        head: "It is clarified that force majeure events includes any event which is beyond the reasonable control of the Priceoye which may include but not limited to sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorized access to computer, computer system or computer network, computer crashes, breach of security and encryption.",
      },
    ],
  },
  {
    q: "Your non-personal information",
    answer: [
      {
        head: "Usage: How you use our Platform, such as the types of content that you view or engage with, the features you use, your searches results, your browsing information, the actions you take and the time, frequency and duration of your activities.",
      },
      {
        head: "Device Information: Information about the computer, mobile, laptop, tablet or any other internet enabled electronic device (Device) you use to access the Platform. This may include real-time information about the geographic location of your device as permitted by you, internet connection, your IP address, operating systems, platforms, browsing information, device type, device ID, network information, metadata and other information associated with other files stored on your Device, last URL visited, your website search history.",
      },
    ],
  },
  {
    q: "Other websites links",
    answer: [
      {
        head: "Our website contains links to other websites. Our mobile application may also contain links to other mobile applications and websites. If you click on one of these links, please note that each one will have its own privacy policy. We do not control these",
      },
      {
        head: "websites/apps and Priceoye is not responsible for the privacy practices or the content of such websites and mobile applications. We are not responsible for the direct or indirect consequences of you linking to any other website from this website. When you leave our platform, we encourage you to read the privacy notice of every website you visit.",
      },
    ],
  },
  {
    q: "Use of information",
    head: "Priceoye collect your Information solely for the purpose of providing you the products or services that is connected with the function or activity of the Priceoye which includes but not limited to the following (Purpose):",
    answer: [
      {
        P: "To inform you about various products and services offered on our platform and provide customer support to You.",
      },
      {
        P: "To address your queries and resolve your concerns pertaining to any product or service that You were looking for.",
      },
      {
        P: "To send you survey and marketing communications or facilitate various programs and initiatives launched either by us or third parties which we believe may be of interest to you.",
      },
      {
        P: "To facilitate your usage of the platform (what features you like, how you use them etc.) and improve our products or services, or any other content on the platform (such as by personalizing content to your interests), process and complete your transactions, and make special offers.",
      },
      {
        P: "To review platform performance, diagnose technical problems and do data analysis to make your experience better.",
      },
      {
        P: "To protect the integrity of our platform.",
      },
      {
        P: "To inform you about change in any term and condition of this Privacy Policy or Terms of Use of any platform of Priceoye.",
      },
      {
        P: "To implement information security practices, to determine any security breaches, contaminant or computer virus, to investigate/prevent/take action against illegal activities and suspected fraud.",
      },
      {
        P: "To keep you informed about news, events and ideas regarding your preferences and help you to improve your knowledge and skills about the preferred content.",
      },
      {
        P: "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.",
      },
      {
        P: "To allow you to participate in interactive features offered through our Platform.",
      },
      {
        P: "To contact you about our own and third-party products and services that may be of interest to you.",
      },
      {
        P: "To produce and share aggregate insights and statistics that do not identify you.",
      },
      {
        P: "To enable us independently or in association with third parties to show you tailored ads that are relevant to you.",
      },
      {
        P: "To enable us to display advertisements to our advertisers/service providers target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria.",
      },
      {
        P: "To help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services.",
      },
      {
        P: "To help diagnose problems with our server, and to administer our web site and mobile application.",
      },
      {
        P: "In any other way we may describe when you provide the information.",
      },
      {
        P: "For any other purpose with your consent.",
      },
    ],
  },
  {
    q: "Public forums",
    ans: "Priceoye has a very active community in our forums. Please remember that any information that is disclosed in these areas becomes public information and you should exercise caution when deciding to disclose your personal information.",
  },
  {
    q: "Information to law enforcement authorities, regulators and other",
    answer: [
      {
        p: "We may disclose your personal data to law enforcement authorities, regulators, governmental or public bodies and other relevant third parties to comply with any legal or regulatory requirements.",
      },
      {
        p: "In addition to this, Priceoye reserves the right to share your information with any government agency or other authorized law enforcement agencies mandated under law to obtain your information for the purpose of verification of identity or for prevention, detection, investigation including but not limited to cyber incidents, prosecution, and punishment of offences etc.",
      },
      {
        p: "We may process your Information outside Pakistan on legally provided mechanisms to lawfully transfer your Information across borders.We may share your information in any other circumstances where we have your consent.",
      },
    ],
  },
  {
    q: "Change in terms of privacy policy",
    ans: "Priceoye reserves the right to amend or modify this privacy policy at any time, as and when the need arises. We request you to keep it up to date with legal requirements and the way we operate our business. Please regularly check this privacy policy from time to time to keep you apprised of changes made/latest version of this privacy policy. Your continued use of the Platform gives your unconditional acceptance to such change in terms of Privacy Policy.",
  },
  {
    q: "Use of cookies",
    answer: [
      {
        p: "When you view our website, we might store some information on your computer. This information will be in the form of a cookies or similar file. Cookies are small pieces of information stored on your hard drive, not on our site. Cookies do not spy on you or otherwise invade your privacy, and they cannot invade your hard drive and steal information. Rather, they help you navigate a web site as easily as possible. We use cookies to deliver content specific to your interests and to prevent you from reentering all your registration data at each connection.",
      },
      {
        p: "We may use an outside advertisement server company to display ads on our site and/or mobile application. These ads may contain cookies. The advertisement server company may collect cookies received with outside banner ads. We do not have access to information that would confirm the use of cookies by the advertisement server company.",
      },
    ],
  },
  {
    q: "Contact us",
    ans: "If you have enquiry or concern related to this privacy policy or collection, storage, retention or disclosure of your Information under the terms of this privacy policy or terms of use or any other terms and conditions of or its other business entities including any queries or grievances, or the way in which we are handling personal data please contact our admin department via the contact page.",
  },
];

const Policy = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
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
      <article>
        <h1 className="font-semibold text-xl text-center py-4">
          Privacy Policy
        </h1>
        <p className="text-[12.5px] text-[#202020] max-w-[1030px] m-auto my-5">
          In our user privacy we have compiled all essential information about
          our handling of your personal data and your corresponding rights for
          you. Priceoye is committed to protecting the privacy of our users.
          This statement applies with respect to the information that we collect
          from our website as well as our Mobile Application. Amendments to this
          statement will be posted at this URL and will be effective when
          posted. We care about your privacy and are committed to protecting
          your personal data. This privacy statement will inform you how we
          handle your personal data, your privacy rights and how the law
          protects you. Your continued use of this site and mobile application
          following the posting of any amendment, modification or change shall
          constitute your acceptance thereof. Please read this privacy statement
          carefully before using our Services. This User Privacy Policy is
          effective from 1st January, 2021
        </p>
      </article>
      <article className="mb-5 max-w-[1050px] m-auto">
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {Policy_Data.map((item, index) => (
            <div key={index}>
              <div className="border-b border-[#a3a3a3] pb-3">
                <div
                  className="flex items-center cursor-pointer gap-2"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>
                    {activeQuestion === index ? (
                      <div className="flex items-center justify-center text-[#707070] w-[35px] h-[35px] rounded-full bg-[#efefef]">
                        <CgLoadbar size={20} />
                      </div>
                    ) : (
                      <div className="font-[500] text-[#707070]">
                        <FaPlus />
                      </div>
                    )}
                  </span>
                  <span className="text-[14px] font-[500] text-[#202020]">
                    {item.q}
                  </span>
                </div>
              </div>
              {activeQuestion === index && (
                <div className="text-[12.6px] text-[#202020] my-4 space-y-3">
                  {item.ans && <p>{item.ans}</p>}
                  {item.head && (
                    <h3 className="font-semibold text-black">{item.head}</h3>
                  )}
                  {item.answer &&
                    item.answer.map((answerItem, i) => (
                      <div key={i} className="space-y-2">
                        {answerItem.p && <p>{answerItem.p}</p>}
                        {answerItem.head && (
                          <p className="font-medium">{answerItem.head}</p>
                        )}
                        {answerItem.P && <p>{answerItem.P}</p>}
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

export default Policy;
