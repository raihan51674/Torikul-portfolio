import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const HireNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className=" bg-[#1c1f26] border border-amber-50 text-white px-3 md:px-5  py-7 rounded-xl shadow-xl flex items-center gap-2 md:gap-4 relative w-[305px] md:w-[420px] animate-slideUp">

        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-pink-600 hover:text-white"
        >
          <IoMdClose size={25} />
        </button>


        <img
          src="https://i.ibb.co/mVLmd6PV/tttt-3d316301.jpg"
          alt="profile"
          className="w-14 h-14 rounded-full border-2 border-white"
        />


        <div className="flex-1">
          <h3 className="text-sm md:text-base font-semibold leading-snug">
            I'm Torikul Islam Bhuiyan — available for hire
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Availability: Maximum 2 Hours
          </p>
        </div>


        <a
          href="#contact"
          className=" bg-pink-600 text-white text-sm px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          Hire me
        </a>
      </div>
    </div>
  );
};

export default HireNotification;
