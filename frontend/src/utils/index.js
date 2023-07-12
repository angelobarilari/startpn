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

export const convertToTimeStamp = (date, hour) => {
    const startDateTime = new Date(`${date}T${hour}:00`);
    const startDate = startDateTime.getTime();
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000);
    const endDate = endDateTime.getTime();

    return { startDate, endDate };
};
