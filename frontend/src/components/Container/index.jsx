import React from "react";

const Container = ({ className, children, ...rest }) => {
    const styleBox = {
        ...rest,
    };

    return (
        <div className={className || "genericContainer"} style={styleBox}>
            {children}
        </div>
    );
};

export default Container;
