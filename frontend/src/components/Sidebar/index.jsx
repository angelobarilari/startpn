import React from "react";

const Sidebar = ({ className, children, ...rest }) => {
    const styleSidebar = {
        ...rest,
    };

    return (
        <aside className={className || "genericAside"} style={styleSidebar}>
            {children}
        </aside>
    );
};

export default Sidebar;
