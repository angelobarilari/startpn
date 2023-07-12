import React from "react";

const Select = ({ value, onChange, className, children, style, ...rest }) => {
    const styleSelect = {
        ...style,
        ...rest,
    };

    return (
        <select
            value={value}
            onChange={onChange}
            className={className || "genericSelect"}
            style={styleSelect}
        >
            {children}
        </select>
    );
};

export default Select;
