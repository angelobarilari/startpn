import React from "react";
import UserProvider from "./user";
import SchedulesProvider from "./schedules";

function Provider({ children }) {
    return (
        <SchedulesProvider>
            <UserProvider>{children}</UserProvider>
        </SchedulesProvider>
    );
}

export default Provider;
