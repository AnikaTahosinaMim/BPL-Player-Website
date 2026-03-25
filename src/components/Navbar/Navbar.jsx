import React from "react";

import dollarimg from "../../assets/assets/dollar_1.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="gap-2 flex justify-between text-center">
            0 coin
            <img src={dollarimg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
