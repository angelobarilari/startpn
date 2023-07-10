import React from "react";

const Form = ({ className, children, onSubmit, ...rest }) => {
    const styleForm = {
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
