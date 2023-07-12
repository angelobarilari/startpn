import React from "react";

const Select = ({ value, className, children, style, ...rest }) => {
    const styleSelect = {
        ...style,
        ...rest,
    };

    return (
        <select
            value={value}
            className={className || "genericSelect"}
            style={styleSelect}
        >
            {children}
        </select>
    );
};

export default Select;
