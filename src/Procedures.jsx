import React from "react";
import { Link } from "react-router-dom";

const Procedures = () => {
  const policies = [
    {
      image:
        "https://static.priceoye.pk/images/static_icons/coupon-usage-terms.svg",
      title: "coupon usage",
    },
    {
      image: "https://static.priceoye.pk/images/static_icons/e_w_p.png",
      title: "extended warranty",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/fair_shipping_policy.png",
      title: "fair usage",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/installment_plan.png",
      title: "installment plan",
      path: "/Plans",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/open_parcel_policy.png",
      title: "open parcel",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/price_beating_policy.png",
      title: "price beating",
    },
    {
      image: "https://static.priceoye.pk/images/static_icons/refund_policy.png",
      title: "refund policy",
    },
    {
      image: "https://static.priceoye.pk/images/static_icons/return-policy.png",
      title: "return policy",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/shipping%20_policy.png",
      title: "shipping policy",
    },
    {
      image:
        "https://static.priceoye.pk/images/static_icons/warranty_policy.png",
      title: "warranty policy",
    },
  ];

  return (
    <article className="bg-[#eef7ff] py-[45px]">
      <h1 className="max-w-[1050px] m-auto font-[500] text-[20px]">
        Related Policies and Procedures
      </h1>
      <div className="max-w-[1110px] w-full m-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-6">
        {policies.map((policy, index) => {
          return (
            <Link to={policy.path ? policy.path : "#"} key={index}>
              <div className="flex flex-col items-center gap-4 py-6 rounded-[15px] mt-3 bg-white">
                <div className="">
                  <img
                    src={policy.image}
                    alt={policy.title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="">
                  <h2 className="text-[15px] text-[#333354] font-[500] capitalize">
                    {policy.title}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default Procedures;
