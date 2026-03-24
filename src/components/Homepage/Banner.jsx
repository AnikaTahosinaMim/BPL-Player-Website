import React from "react";
import banner from "../../assets/assets/banner-main.png";

const Banner = () => {
  return (
    <div className="min-h-[60vh] bg-linear-to-r from-purple-600 to-bottom-purple-400 rounded-2xl">
      <div className="text-center space-y-2 pt-4">
        <img className="flex justify-center mx-auto"  src={banner} alt="" />
        <h3 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h3>
        <p className="text-xl ">Beyond Boundaries Beyond Limits</p>
        <button className="px-2 py-2 bg-yellow-400 rounded-xl border border-black">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
