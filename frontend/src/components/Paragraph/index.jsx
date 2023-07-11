import React from "react";

const Paragraph = ({ className, children, style, ...rest }) => {
    const styleParagraph = {
        ...style,
        ...rest,
    };

    return (
        <p className={className || "genericParagraph"} style={styleParagraph}>
            {children}
        </p>
    );
};

export default Paragraph;
