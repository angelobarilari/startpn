import React from "react";

const Button = ({ type, className, onClick, children, style, ...rest }) => {
    const styleButton = {
        ...style,
        ...rest,
    };

    return (
        <button
            className={className || "genericBtn"}
            onClick={onClick}
            style={styleButton}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
