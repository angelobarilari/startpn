import React from "react";

const Label = ({ className, htmlFor, children, style, ...rest }) => {
    const styleLabel = {
        ...style,
        ...rest,
    };

    return (
        <label
            className={className || "genericLabel"}
            htmlFor={htmlFor}
            style={styleLabel}
        >
            {children}
        </label>
    );
};

export default Label;
