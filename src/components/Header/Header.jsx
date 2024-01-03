import React, {useEffect, useState} from "react";
import {HamburgerIcon, Logo, SearchIcon, UserIcon} from "../../assets/svg";

import Title, {Position} from "./Title";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

const Header = ({title, pageName, exitingNavigation}) => {

    return (<div className="flex justify-between items-center p-5">
        {pageName ? (<span className="text-6xl text-black uppercase">{pageName}</span>) : (<Logo/>)}

        <Title title={title} position={Position.Top}/>

        <div className="flex justify-between w-1/6">
            <div className="cursor-pointer">
                <Search/>
            </div>
            <div className="cursor-pointer">
                <UserIcon/>
            </div>
            {/*<div onClick={toggleSideBar} className="cursor-pointer">*/}
            {/*    <HamburgerIcon/>*/}
            {/*</div>*/}
            <Sidebar/>

        </div>
    </div>);
};
export default Header;
