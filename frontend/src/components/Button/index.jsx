import React from "react";

const Button = ({ className, onClick, children, style, ...rest }) => {
    const styleButton = {
        ...style,
        ...rest,
    };

    return (
        <button
            className={className || "genericBtn"}
            onClick={onClick}
            style={styleButton}
        >
            {children}
        </button>
    );
};

export default Button;
