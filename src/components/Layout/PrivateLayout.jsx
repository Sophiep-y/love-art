import React from "react";
import Header from "../Header/Header";
import {Footer} from "../Footer/Footer";
import Title, {Position} from "../Header/Title";

const PrivateLayout = ({children, title, pageTitle, noHeader, footer, footer_on_stick, footerRef, className}) => {
    return (
        <div className={` ${className} bg-white`}>
            {!noHeader && <Header title={title} pageName={pageTitle}></Header>}
            {children}
            <Title title={title} position={Position.Bottom}/>
            {footer && <Footer title={title} footer={footer} sticky={footer_on_stick} ref={footerRef}/>}
        </div>
    );
};

export default PrivateLayout;
