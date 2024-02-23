import {useEffect, useState} from 'react';
import {sidebarData} from "../../../../../../Downloads/utils/sidebar-menu";
import {useLocation} from "react-router-dom";

const usePageTitle = (pathname) => {

    const location = useLocation();


    const [title, setTitle] = useState('');

    useEffect(() => {
        const menuItem = sidebarData.find((item) => item.path === (pathname ?? location.pathname));
        setTitle(menuItem ? menuItem.label : '');
    }, [(pathname ?? location.pathname)]);

    return title;
};

export default usePageTitle;
