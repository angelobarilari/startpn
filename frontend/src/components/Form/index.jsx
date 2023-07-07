import React from "react";

const Form = ({ children, onSubmit, ...rest }) => {
    const styleForm = {
        ...rest,
    };

    return (
        <form className="genericForm" style={styleForm} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
