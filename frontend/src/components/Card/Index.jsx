import React from "react";

const Card = ({ className, children, style, ...rest }) => {
    const styleCard = {
        ...style,
        ...rest,
    };

    return (
        <div className={className || "genericCard"} style={styleCard}>
            {children}
        </div>
    );
};

export default Card;
