import {menuItem} from "../Header/menuItem";
import {CrossIcon} from "../../assets/svg/cross-icon";
import {Footer} from "../Footer/Footer";
import React, {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HamburgerIcon} from "../../assets/svg";

const SideBar = ({icon, useExitSidebar}) => {
    const navigate = useNavigate();


    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isNavigation, setIsNavigation] = useState(false);


    const [isHidden, setIsHidden] = useState(useExitSidebar);

    const [isExitNavigation, setIsExitNavigation] = useState(false);


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


    const onClickIcon = useCallback(
        () => {
            try {
                if (isExitNavigation) {
                    console.log('go to recommend');
                    navigate('/recommends');
                } else {
                    if (useExitSidebar) {
                        console.log("22")
                        setIsHidden(!isHidden)
                        setTimeout(() => {
                            setIsExitNavigation(true)
                        }, 300)

                    } else {
                        toggleSideBar();
                    }
                    console.log('what')
                }

            } catch (e) {
                console.log(e)
            }
        },
        [isExitNavigation, navigate, useExitSidebar, isHidden],
    );


    return (<div>
        <div onClick={onClickIcon} className="cursor-pointer">
            {icon ? icon : <HamburgerIcon/>}
        </div>
        {(!isCollapsed || isExitNavigation) ? <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"

            onClick={() => {
                if (useExitSidebar) {
                    setIsExitNavigation(false)
                    setTimeout(() => {
                        setIsHidden(true)
                    }, 300)
                } else {
                    setIsCollapsed(true)
                }
            }}
        ></div> : null}

        <div
            className={
                useExitSidebar ? isExitNavigation ? `absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5 w-2/3 h-full top-0 pt-0.5 pl-5 left-1/3 transform transition-all duration-300 ease-in-out -translate-x-0` : `${isHidden ? 'hidden' : 'block'}  absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5  w-full h-full top-0 pt-0.5 pl-5  left-0   transform transition-all duration-300 ease-in-out  translate-x-0 ` : `absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5   ${isNavigation ? 'w-full' : 'w-2/3'}  h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'left-1/3'}  transform transition-all duration-300 ease-in-out ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`
            }
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
    </div>);
}

export default SideBar;