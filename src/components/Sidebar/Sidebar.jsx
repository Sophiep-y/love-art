import {menuItem} from "../Header/menuItem";
import {CrossIcon} from "../../assets/svg/cross-icon";
import {Footer} from "../Footer/Footer";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HamburgerIcon} from "../../assets/svg";

const SideBar = ({icon, useExitSidebar}) => {
    const navigate = useNavigate();


    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isNavigation, setIsNavigation] = useState(false);

    const [isExitingNavigation, setIsExitingNavigation] = useState(false);


    const handleExtendClick = () => {
        setIsNavigation(!isNavigation);
    };
    const toggleSideBar = () => {

        if (isNavigation) {
            setIsNavigation(false);
        } else {
            setIsCollapsed(!isCollapsed);
        }

    };
    const handleNavigation = (to) => {
        handleExtendClick();
        setTimeout(() => {
            navigate(to);
            toggleSideBar();
        }, 300);

    };


    const onClickIcon = () => {
        if (useExitSidebar) {
            if (isExitingNavigation) {
            } else {
                setIsExitingNavigation(true);
            }
        } else {
            toggleSideBar();
        }
    }

    return (<div>
            <div onClick={onClickIcon} className="cursor-pointer">
                {icon ? icon : <HamburgerIcon/>}
            </div>
            {
                (isExitingNavigation || !isCollapsed) ?
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
                    ></div> : null
            }

            <div
                className={
                    useExitSidebar ?
                        ` ${isExitingNavigation ? 'block' : 'hidden'}   absolute bg-white z-20 shadow-2xl shadow-modalShadowColor  py-5  ${isExitingNavigation ? 'w-2/3' : 'w-full'} h-full top-0 pt-0.5 pl-5 ${isExitingNavigation ? 'left-1/3' : 'left-0'} transform transition-all duration-300 ease-in-out  ${isExitingNavigation ? '-translate-x-0' : 'translate-x-0'}  ` :
                        `absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5   ${isNavigation ? 'w-full' : 'w-2/3'}  h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'left-1/3'}  transform transition-all duration-300 ease-in-out ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`}
            >
                <div className="flex flex-col">
                    {menuItem?.map((item, _) => (<span
                        onClick={() => handleNavigation(item?.to)}
                        className="uppercase text-primary text-6xl cursor-pointer font-extralight"
                    >
                {item?.title}
              </span>))}
                </div>
                <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={toggleSideBar}
                >
                    <CrossIcon/>
                </div>
                <Footer absolute/>
            </div>


        </div>


    );
}

export default SideBar;