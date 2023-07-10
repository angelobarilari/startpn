import React from "react";

const Button = ({ className, onClick, children, ...rest }) => {
    const styleButton = {
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
