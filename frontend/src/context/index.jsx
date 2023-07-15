import React from "react";
import UserProvider from "./user";
import SchedulesProvider from "./schedules";
import UsersProvider from "./users";
import TalkingPointProvider from "./talkingPoint";

function Provider({ children }) {
    return (
        <SchedulesProvider>
            <TalkingPointProvider>
                <UsersProvider>
                    <UserProvider>{children}</UserProvider>
                </UsersProvider>
            </TalkingPointProvider>
        </SchedulesProvider>
    );
}

export default Provider;
