import React from "react";

const Header = ({ className, children, ...rest }) => {
    const styleHeader = {
        ...rest,
    };

    return (
        <header className={className || "genericHeader"} style={styleHeader}>
            {children}
        </header>
    );
};

export default Header;
