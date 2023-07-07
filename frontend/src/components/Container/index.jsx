import React from "react";

const Container = ({ children, ...rest }) => {
    const styleBox = {
        ...rest,
    };

    return (
        <div className="genericContainer" style={styleBox}>
            {children}
        </div>
    );
};

export default Container;
