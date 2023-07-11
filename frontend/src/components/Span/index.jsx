import React from "react";

const Span = ({ className, children, style, ...rest }) => {
    const styleSpan = {
        ...style,
        ...rest,
    };

    return (
        <span className={className || "genericSpan"} style={styleSpan}>
            {children}
        </span>
    );
};

export default Span;
