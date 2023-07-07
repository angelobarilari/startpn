import React from "react";

const Button = ({ children, onClick, ...rest }) => {
    const styleButton = {
        ...rest,
    };

    return (
        <button className="genericBtn" onClick={onClick} style={styleButton}>
            {children}
        </button>
    );
};

export default Button;
