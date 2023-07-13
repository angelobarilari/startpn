import { DateTime } from "luxon";

// Return yyyy-MM-dddd
export const formatDate = (dateTime) => {
    const dateObj = new Date(dateTime);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

// Return HH:mm
export const formatTime = (dateTime) => {
    const dateObj = new Date(dateTime);

    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
};

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
