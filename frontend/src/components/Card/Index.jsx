import React from "react";

const Card = ({ children, ...rest }) => {
    const styleCard = {
        ...rest,
    };

    return (
        <div className="genericCard" style={styleCard}>
            {children}
        </div>
    );
};

export default Card;
