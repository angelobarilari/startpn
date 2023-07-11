import React from "react";

const Form = ({ className, children, onSubmit, style, ...rest }) => {
    const styleForm = {
        ...style,
        ...rest,
    };

    return (
        <form
            className={className || "genericForm"}
            style={styleForm}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};

export default Form;
