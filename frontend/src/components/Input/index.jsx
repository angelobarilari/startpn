import React from "react";

const Input = ({
    className,
    value,
    onChange,
    placeholder,
    type,
    style,
    ...rest
}) => {
    const styleInput = {
        ...style,
        ...rest,
    };

    return (
        <>
            <input
                className={className || "genericInput"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                style={styleInput}
            />
        </>
    );
};

export default Input;
