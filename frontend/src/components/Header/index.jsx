import React from "react";

const Header = ({ className, children, style, ...rest }) => {
    const styleHeader = {
        ...style,
        ...rest,
    };

    return (
        <header className={className || "genericHeader"} style={styleHeader}>
            {children}
        </header>
    );
};

export default Header;
