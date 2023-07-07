import React from "react";

const Sidebar = ({ children, ...rest }) => {
    const styleSidebar = {
        ...rest,
    };

    return (
        <aside className="genericAside" style={styleSidebar}>
            {children}
        </aside>
    );
};

export default Sidebar;
