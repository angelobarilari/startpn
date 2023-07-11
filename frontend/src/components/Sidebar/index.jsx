import React, { forwardRef } from "react";

const Sidebar = forwardRef(({ className, children, style, ...rest }, ref) => {
    const styleSidebar = {
        ...style,
        ...rest,
    };

    return (
        <aside
            ref={ref}
            className={className || "genericAside"}
            style={styleSidebar}
        >
            {children}
        </aside>
    );
});

export default Sidebar;
