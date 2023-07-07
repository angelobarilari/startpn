import React from "react";

const Span = ({ children, ...rest }) => {
    const styleSpan = {
        ...rest,
    };

    return (
        <span className="genericAside" style={styleSpan}>
            {children}
        </span>
    );
};

export default Span;
