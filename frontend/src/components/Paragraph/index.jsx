import React from "react";

const Paragraph = ({ children, ...rest }) => {
    const styleParagraph = {
        ...rest,
    };

    return <p style={styleParagraph}>{children}</p>;
};

export default Paragraph;
