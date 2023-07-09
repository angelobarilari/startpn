import React from "react";

const Header = ({ children, ...rest }) => {
    const styleHeader = {
        ...rest,
    };

    return (
        <header className="genericHeader" style={styleHeader}>
            {children}
        </header>
    );
};

export default Header;
