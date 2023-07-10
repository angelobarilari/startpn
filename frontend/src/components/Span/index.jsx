import React from "react";

const Span = ({ className, children, ...rest }) => {
    const styleSpan = {
        ...rest,
    };

    return (
        <span className={className || "genericSpan"} style={styleSpan}>
            {children}
        </span>
    );
};

export default Span;
