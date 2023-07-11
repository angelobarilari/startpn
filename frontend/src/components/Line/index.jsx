import React from "react";

const Line = ({ className, style, ...rest }) => {
    const styleLine = {
        ...style,
        ...rest,
    };

    return <hr className={className || "genericHr"} style={styleLine} />;
};

export default Line;
