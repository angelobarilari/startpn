import React, { createContext, useState, useEffect } from "react";
import { getSchedules } from "../../services/api";
import { compareAsc, isBefore } from "date-fns";

export const SchedulesContext = createContext({});

function SchedulesProvider({ children }) {
    const [schedules, setSchedules] = useState([]);
    const [pastSchedules, setPastSchedules] = useState([]);
    const [upcomingSchedules, setUpcomingSchedules] = useState([]);

    useEffect(() => {
        getSchedules()
            .then((res) => setSchedules(res.data.schedules))
            .catch((err) => console.log(err.response.data));
    }, [setSchedules]);

    useEffect(() => {
        const currentDate = new Date();

        const filteredPastSchedules = schedules.filter((schedule) =>
            isBefore(new Date(schedule.startDate), currentDate)
        );
        const sortedPastSchedules = filteredPastSchedules.sort((a, b) =>
            compareAsc(new Date(a.startDate), new Date(b.startDate))
        );

        const filteredUpcomingSchedules = schedules.filter(
            (schedule) => !isBefore(new Date(schedule.startDate), currentDate)
        );
        const sortedUpcomingSchedules = filteredUpcomingSchedules.sort((a, b) =>
            compareAsc(new Date(a.startDate), new Date(b.startDate))
        );

        setPastSchedules(sortedPastSchedules);
        setUpcomingSchedules(sortedUpcomingSchedules);
    }, [schedules]);

    return (
        <SchedulesContext.Provider
            value={{
                pastSchedules,
                upcomingSchedules,
                setPastSchedules,
                setUpcomingSchedules,
            }}
        >
            {children}
        </SchedulesContext.Provider>
    );
}

export default SchedulesProvider;
