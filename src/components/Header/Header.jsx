import React from "react";
import {Logo, UserIcon} from "../../assets/svg";

import Title, {Position} from "./Title";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

const Header = ({title, pageName, exitingNavigation}) => {

    return (<div className="flex justify-between items-center p-5">
        {pageName ? (<span className="text-6xl text-black uppercase">{pageName}</span>) : (<Logo/>)}

        <Title title={title} position={Position.Top}/>

        <div className="flex justify-between items-center md:w-1/6  ">
            <div className="cursor-pointer ml-6 mx-2">
                <Search/>
            </div>
            <div className="cursor-pointer mx-2">
                <UserIcon/>
            </div>
            <Sidebar className='mx-2'/>

        </div>
    </div>);
};
export default Header;
