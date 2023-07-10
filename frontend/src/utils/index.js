import { DateTime } from "luxon";

export const formatDateRange = (startDate, endDate) => {
    const formattedStartDate =
        DateTime.fromISO(startDate).toFormat("dd/MM/yyyy");

    const startTime = DateTime.fromISO(startDate).toFormat("HH:mm");
    const endTime = DateTime.fromISO(endDate).toFormat("HH:mm");

    const formattedTimeRange = `${startTime}-${endTime}`;

    const formattedDateTimeRange = `${formattedStartDate} - ${formattedTimeRange}`;

    return formattedDateTimeRange;
};
