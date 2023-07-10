import React from "react";

const Label = ({ className, htmlFor, children, ...rest }) => {
    const styleLabel = {
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
