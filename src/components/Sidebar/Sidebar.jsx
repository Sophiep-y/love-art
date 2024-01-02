import {menuItem} from "../Header/menuItem";
import {CrossIcon} from "../../assets/svg/cross-icon";
import {Footer} from "../Footer/Footer";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HamburgerIcon} from "../../assets/svg";

const SideBar = ({icon, useExitSidebar}) => {
    const navigate = useNavigate();


    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isUnCollapse, setIsUnCollapse] = useState(false);
    const [isNavigation, setIsNavigation] = useState(false);


    const [isExitHidden, setIsExitHidden] = useState(useExitSidebar);
    const [isExitNavigation, setIsExitNavigation] = useState(false);
    const [isExitCollapsed, setIsExitCollapsed] = useState(false);


    const handleExtendClick = () => {
        setIsNavigation(!isNavigation);
    };
    const toggleSideBar = () => {
        if (isNavigation) {
            setIsNavigation(false);
        } else {
            setIsUnCollapse(!isUnCollapse);
            setTimeout(() => {
                setIsCollapsed(!isCollapsed);
            }, 0);

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
        try {
            if (isExitNavigation) {
                setIsExitCollapsed(true);
                setTimeout(() => {
                    navigate('/recommends');
                }, 300)

            } else {
                if (useExitSidebar) {
                    console.log("22")
                    setIsExitHidden(!isExitHidden)
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
    };

    return (<div>
        <div onClick={(e) => {
            e.stopPropagation();
            onClickIcon();
        }} className="cursor-pointer">
            {icon ?? <HamburgerIcon/>}
        </div>
        {/*overlay*/}
        {(!isCollapsed || isExitNavigation) ? <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"

            onClick={() => {
                if (useExitSidebar) {
                    setIsExitNavigation(false)
                    setTimeout(() => {
                        setIsExitHidden(true)
                    }, 300)
                } else {
                    setIsUnCollapse(false)
                    setIsCollapsed(true)
                }
            }}
        ></div> : null}

        {/*sidebar*/}
        <div
            className={
                useExitSidebar ?
                    isExitNavigation ?
                        `absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5 ${isNavigation ? 'w-full' : 'w-2/3'} h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'left-1/3'} transform transition-all duration-300 ease-in-out ${isExitCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}` :
                        `${isExitHidden ? 'hidden' : 'block'}  absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5  w-full h-full top-0 pt-0.5 pl-5  left-0   transform transition-all duration-300 ease-in-out  translate-x-0 `
                    : `${isUnCollapse ? 'block' : 'hidden'} absolute bg-white z-10 shadow-2xl shadow-modalShadowColor  py-5   ${isNavigation ? 'w-full' : 'w-2/3'}  h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'left-1/3'}  transform transition-all duration-300 ease-in-out ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`
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
                onClick={(e) => {
                    isExitNavigation ? onClickIcon() : toggleSideBar();
                }}
            >
                <CrossIcon/>
            </div>
            <Footer absolute/>
        </div>
    </div>);
}

export default SideBar;