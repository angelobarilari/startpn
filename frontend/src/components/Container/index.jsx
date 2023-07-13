import React from "react";

const Container = ({ onClick, className, children, style, ...rest }) => {
    const styleBox = {
        ...style,
        ...rest,
    };

    return (
        <div
            onClick={onClick}
            className={className || "genericContainer"}
            style={styleBox}
        >
            {children}
        </div>
    );
};

export default Container;
