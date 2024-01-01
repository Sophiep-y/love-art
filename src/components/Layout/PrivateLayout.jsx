import React from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";

const PrivateLayout = ({ children, title, pageTitle, noHeader, footer }) => {
  return (
    <div className="bg-white">
      {!noHeader && <Header title={title} pageName={pageTitle}></Header>}
      {children}
      {footer && <Footer footer />}
    </div>
  );
};

export default PrivateLayout;
