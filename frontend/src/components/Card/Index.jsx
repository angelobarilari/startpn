import React from "react";

const Card = ({ className, children, ...rest }) => {
    const styleCard = {
        ...rest,
    };

    return (
        <div className={className || "genericCard"} style={styleCard}>
            {children}
        </div>
    );
};

export default Card;
