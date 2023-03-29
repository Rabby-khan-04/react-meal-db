import React from "react";
import logo from "../../assets/Tasty_HUT.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto py-5">
      <div className="navbar-start">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary font-bold tracking-widest">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
