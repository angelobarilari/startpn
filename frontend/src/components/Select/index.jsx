import React from "react";

const Select = ({ className, children, style, ...rest }) => {
    const styleSelect = {
        ...style,
        ...rest,
    };

    return (
        <select className={className || "genericSelect"} style={styleSelect}>
            {children}
        </select>
    );
};

export default Select;
