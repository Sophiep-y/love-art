import React from "react";

const DropdownOption = ({onClick, children, className}) => (
    <div className={className} onClick={onClick}>
        {children}
    </div>
);
export default DropdownOption;