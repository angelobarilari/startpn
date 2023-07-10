import React from "react";

const Paragraph = ({ className, children, ...rest }) => {
    const styleParagraph = {
        ...rest,
    };

    return (
        <p className={className || "genericParagraph"} style={styleParagraph}>
            {children}
        </p>
    );
};

export default Paragraph;
