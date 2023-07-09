import React, { createContext, useState } from "react";

export const SchedulesContext = createContext({});

function SchedulesProvider({ children }) {
    const [schedules, setSchedules] = useState([]);

    return (
        <SchedulesContext.Provider
            value={{
                schedules,
                setSchedules,
            }}
        >
            {children}
        </SchedulesContext.Provider>
    );
}

export default SchedulesProvider;
