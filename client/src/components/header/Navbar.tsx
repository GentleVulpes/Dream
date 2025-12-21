import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/menu.svg?react";
import BagIcon from "../../assets/shopping_bag.svg?react";
import ProfileIcon from "../../assets/profile.svg?react";


const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 max-h-15 bg-main-500 p-4">
      <button className="text-white justify-self-start">
        <MenuIcon />
      </button>
      <Link to="/" className="justify-self-center font-brand text-white text-2xl font-bold">Dream</Link>
      {/* <a className="justify-self-center font-brand text-white text-2xl font-bold" href="">
        Dream
      </a> */}
      <div className="flex justify-self-end gap-4">
        <button className="nav-icon-button">
          <BagIcon />
        </button>
        <button className="nav-icon-button">
          <ProfileIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
