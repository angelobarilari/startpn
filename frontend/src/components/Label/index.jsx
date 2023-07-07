import React from "react";

const Label = ({ htmlFor, children, ...rest }) => {
    const styleLabel = {
        ...rest,
    };

    return (
        <label htmlFor={htmlFor} style={styleLabel}>
            {children}
        </label>
    );
};

export default Label;
