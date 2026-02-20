import React from "react";

const Warrantychallenge = () => {
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
    </div>
  );
};

export default Warrantychallenge;
