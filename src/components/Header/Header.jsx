import React, { useState } from "react";
import { HamburgerIcon, Logo, SearchIcon, UserIcon } from "../../assets/svg";
import { menuItem } from "./menuItem";
import { CrossIcon } from "../../assets/svg/cross-icon";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Header = ({ title, pageName }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const handleNavigation = (to) => {
    navigate(to);
    toggleSideBar();
  };
  return (
    <div className="flex justify-between items-center p-5">
      {pageName ? (
        <span className="text-6xl text-black uppercase">{pageName}</span>
      ) : (
        <Logo />
      )}

      <span className="uppercase text-6xl text-primary font-extralight">
        {title}
      </span>
      <div className="flex justify-between w-1/6">
        <div className="cursor-pointer">
          <SearchIcon />
        </div>
        <div className="cursor-pointer">
          <UserIcon />
        </div>
        <div onClick={toggleSideBar} className="cursor-pointer">
          <HamburgerIcon />
        </div>
        <div
          className={
            !isCollapsed
              ? "hidden"
              : "block absolute bg-white shadow-2xl shadow-modalShadowColor w-2/3 h-full top-0 pt-0.5 pl-5 left-1/3"
          }
        >
          <div className="flex flex-col">
            {menuItem?.map((item, index) => (
              <span
                onClick={() => handleNavigation(item?.to)}
                className="uppercase text-primary text-6xl cursor-pointer font-extralight"
              >
                {item?.title}
              </span>
            ))}
          </div>
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleSideBar}
          >
            <CrossIcon />
          </div>
          <Footer absolute />
        </div>
      </div>
    </div>
  );
};
export default Header;
