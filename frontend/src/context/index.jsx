import React from "react";
import UserProvider from "./user";
import SchedulesProvider from "./schedules";
import UsersProvider from "./users";

function Provider({ children }) {
    return (
        <SchedulesProvider>
            <UsersProvider>
                <UserProvider>{children}</UserProvider>
            </UsersProvider>
        </SchedulesProvider>
    );
}

export default Provider;
