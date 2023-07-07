import React from "react";
import companyIcon from "../../images/svg/companyIcon.svg";

const Header = ({ children, ...rest }) => {
    const styleHeader = {
        ...rest,
    };

    return (
        <header className="genericHeader" style={styleHeader}>
            <img src={companyIcon} className="logo" alt="Company icon" />
            {children}
        </header>
    );
};

export default Header;
