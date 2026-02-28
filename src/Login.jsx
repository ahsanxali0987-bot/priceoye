import React from "react";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <div className="rounded-sm max-w-[440px] mx-auto bg-white leading-[20px] my-[52px]">
        <article className="">
          <img
            src="https://static.priceoye.pk/images/login-header-img.svg"
            alt=""
          />
        </article>
        <article className="p-[30px] flex flex-col gap-[20px]">
          <div className="text-[#404040] text-[25px] font-[600]">
            Sign In or Create an Account
          </div>
          <div className="text-[#9090ad] text-[12px] font-[400] leading-[15px]">
            Enter your phone number for a faster checkout, to track the status
            of your order and more.
          </div>
          <div className="text-[#9d759d] w-full text-[13px] rounded-md border-2 pl-[10px] border-[#d1d1d1]">
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full h-[35px]"
            />
          </div>
          <div className="">
            <button className="bg-[#48afff] text-white w-full text-[13px] rounded-md py-[10px]">
              Get OTP
            </button>
          </div>
        </article>
      </div>
      <Footer />
    </> 
  );
};

export default Login;
// import React, { useState } from "react";
// import Footer from "./Footer";

// const Login = () => {
//   const [mobile, setMobile] = useState("");

//   const handleGetOtp = () => {
//     // Placeholder for OTP logic
//     alert(`OTP requested for: ${mobile}`);
//   };

//   return (
//     <>
//       <div className="rounded-sm max-w-[440px] mx-auto bg-white leading-[20px] my-[52px] shadow-md">
//         {/* Header Image */}
//         <article>
//           <img
//             src="https://static.priceoye.pk/images/login-header-img.svg"
//             alt="Login Banner"
//           />
//         </article>

//         {/* Form */}
//         <article className="p-[30px] flex flex-col gap-[20px]">
//           <h1 className="text-[#404040] text-[25px] font-[600]">
//             Sign In or Create an Account
//           </h1>
//           <p className="text-[#9090ad] text-[12px] font-[400] leading-[15px]">
//             Enter your phone number for a faster checkout, to track the status of
//             your order and more.
//           </p>
          
//           {/* Mobile Input */}
//           <div className="w-full text-[13px] rounded-md border-2 pl-[10px] border-[#d1d1d1]">
//             <input
//               type="text"
//               placeholder="Mobile number"
//               className="w-full h-[35px] outline-none"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />
//           </div>

//           {/* OTP Button */}
//           <button
//             onClick={handleGetOtp}
//             className="bg-[#48afff] text-white w-full text-[13px] rounded-md py-[10px]"
//           >
//             Get OTP
//           </button>
//         </article>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Login;
