import React, { createContext, useState, useEffect } from "react";
import { getSchedules } from "../../services/api";

export const SchedulesContext = createContext({});

function SchedulesProvider({ children }) {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getSchedules()
            .then((res) => setSchedules(res.data.schedules))
            .catch((err) => console.log(err.response.data));
    }, [setSchedules]);

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
