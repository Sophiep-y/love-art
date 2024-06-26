import { menuItem } from "../Header/menuItem";
import { CrossIcon } from "../../assets/svg/cross-icon";
import { Footer } from "../Footer/Footer";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "../../assets/svg";
import { APP_ROUTES } from "../../utils/app-routes";

const SideBar = ({ icon, fromSidebarNav, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isUnCollapse, setIsUnCollapse] = useState(false);

  const [isNavigation, setIsNavigation] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(fromSidebarNav);
  const [isSidebarNavigation, setIsSidebarNavigation] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleExtendClick = () => {
    setIsNavigation(!isNavigation);
  };

  const toggleSideBar = () => {
    if (isNavigation) {
      setIsNavigation(false);
    } else {
      if (isUnCollapse) {
        setIsCollapsed(!isCollapsed);
        setTimeout(() => {
          setIsUnCollapse(!isUnCollapse);
        }, 300);
      } else {
        setIsUnCollapse(!isUnCollapse);
        setTimeout(() => {
          setIsCollapsed(!isCollapsed);
        }, 0);
      }
    }
  };

  const handleNavigation = (to) => {
    if (location.pathname !== to) {
      handleExtendClick();
      setTimeout(() => {
        navigate(to);
        toggleSideBar();
      }, 300);
    }
  };

  const onClickIcon = () => {
    try {
      if (isSidebarNavigation) {
        setIsSidebarCollapsed(true);
        setTimeout(() => {
          navigate(APP_ROUTES.recommend);
        }, 300);
      } else {
        if (fromSidebarNav) {
          setIsSidebarHidden(!isSidebarHidden);
          setTimeout(() => {
            setIsSidebarNavigation(true);
          }, 300);
        } else {
          toggleSideBar();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sidebarBaseClasses =
    "fixed bg-white z-10 shadow-2xl shadow-modalShadowColor py-5";
  const transitionClasses = "transform transition-all duration-300 ease-in-out";

  const sidebarClasses = fromSidebarNav
    ? isSidebarNavigation
      ? `${sidebarBaseClasses} ${isNavigation ? "w-full" : "md:w-2/3 w-full"} h-full top-0 bottom-0 pt-0.5 pl-5 ${isNavigation ? "left-0" : "md:left-1/3 left-0"} ${transitionClasses} ${isSidebarCollapsed ? "translate-x-full" : isNavigation ? "translate-x-0" : "-translate-x-0"}`
      : `${isSidebarHidden ? "hidden" : "block"} ${sidebarBaseClasses} py-5 w-full h-full top-0 bottom-0 pt-0.5 pl-5 left-0 ${transitionClasses} translate-x-0`
    : `${isUnCollapse ? "block" : "hidden"} ${sidebarBaseClasses} py-5 ${isNavigation ? "w-full" : "md:w-2/3 w-full"} h-full top-0 bottom-0 pt-0.5 pl-5 ${isNavigation ? "left-0" : "md:left-1/3 left-0"} ${transitionClasses} ${isCollapsed ? "translate-x-full" : isNavigation ? "translate-x-0" : "-translate-x-0"}`;

  return (
    <div>
      {/*open*/}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClickIcon();
        }}
        className={`${className} cursor-pointer`}
      >
        {icon ?? <HamburgerIcon />}
      </div>

      {/*overlay*/}
      {!isCollapsed || isSidebarNavigation ? (
        <div
          className={`fixed top-0 bottom-0 left-0 w-full h-full bg-black opacity-50 z-10`}
          onClick={() => {
            if (fromSidebarNav) {
              setIsSidebarNavigation(false);
              setTimeout(() => {
                setIsSidebarHidden(true);
              }, 300);
            } else {
              setIsUnCollapse(false);
              setIsCollapsed(true);
            }
          }}
        ></div>
      ) : null}

      {/*sidebar*/}
      <div className={sidebarClasses}>
        {/*menus*/}
        <div className="flex flex-col">
          {menuItem?.map((item, _) => (
            <span
              onClick={() => handleNavigation(item?.to)}
              className="uppercase text-primary md:text-6xl text-5xl cursor-pointer font-thin hover:text-black"
            >
              {item?.title}
            </span>
          ))}
        </div>

        {/*close*/}
        <div
          className="fixed top-4 right-4 cursor-pointer"
          onClick={(e) => {
            isSidebarNavigation ? onClickIcon() : toggleSideBar();
          }}
        >
          <CrossIcon />
        </div>

        {/*footer*/}
        <Footer
          sticky
          className="md:scale-100 scale-0 md:opacity-100  opacity-0 "
        />
      </div>
    </div>
  );
};

export default SideBar;
