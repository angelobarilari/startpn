import React from "react";

const Line = ({ className, ...rest }) => {
    const styleLine = {
        ...rest,
    };

    return <hr className={className || "genericHr"} style={styleLine} />;
};

export default Line;
