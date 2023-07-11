import React from "react";

const Container = ({ className, children, style, ...rest }) => {
    const styleBox = {
        ...style,
        ...rest,
    };

    return (
        <div className={className || "genericContainer"} style={styleBox}>
            {children}
        </div>
    );
};

export default Container;
