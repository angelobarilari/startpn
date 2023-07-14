import React from "react";

const Card = ({ onClick, className, children, style, ...rest }) => {
    const styleCard = {
        ...style,
        ...rest,
    };

    return (
        <div
            onClick={onClick}
            className={className || "genericCard"}
            style={styleCard}
        >
            {children}
        </div>
    );
};

export default Card;
