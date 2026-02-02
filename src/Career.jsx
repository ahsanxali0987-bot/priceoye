import React from "react";

const Career = () => {
  return (
    <div className="bg-white min-h-screen p-[28px]">
      <article>
        <img
          src="https://static.priceoye.pk/images/career-banner.webp"
          alt=""
          className="pb-[28px]"
        />
      </article>
      <article className="flex flex-col items-center text-center max-w-[1077px] m-auto gap-14">
        <div>
          <p className="text-[#48afff] text-[21px] font-[500]">
            Explore a Career at Priceoye
          </p>
          <p className="text-[17px]">
            There are jobs -and then there are careers. The chance to do the
            kind of work that adds up to something meaningful. The opportunity
            to challenge yourself and learn new skills. The prospect of being
            surrounded by smart, ambitious, motivated people, day-in and
            day-out. That's the kind of work you can expect to do at Priceoye.
            Sounds interesting?
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-[20px] font-[500]">Come Join us.</p>
          <p className="text-[13px] text-[#000000]">
            Share your resume at{" "}
            <span className="text-[#48afff]">talent@priceoye.pk</span> with the
            relevant subject line.
          </p>
          <p className="text-[13px] text-[#000000]">
            To explore the most recent job opportunities, check out our LinkedIn
            page at{" "}
            <span className="text-[17px] text-[#48afff]">
              linkedin.com/company/priceoye/
            </span>
          </p>
          <p className="text-[13px] text-[#000000]">
            See what our current employees have to say about our working culture
            at Glassdoor.
          </p>
          <p className="text-[#48afff]">Working at Priceoye</p>
        </div>
      </article>
    </div>
  );
};

export default Career;
