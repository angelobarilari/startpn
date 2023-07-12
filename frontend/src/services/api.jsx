import { create } from "apisauce";

const api = create({
    baseURL: "http://localhost:3000/",
});

api.addAsyncRequestTransform((response) => async () => {
    const token = localStorage.getItem("@STARTPN-TOKEN");

    if (token) response.headers["authorization"] = `Bearer ${token}`;
});

export const login = async (data) => {
    api.post("/sessions", data)
        .then((res) => {
            if (!res.data.token) return console.error(res.data.message);

            localStorage.setItem("@STARTPN-TOKEN", res.data.token);
            window.location.href = "/dashboard";
        })
        .catch((err) => console.log(err.response.data));
};

/* ----- USERS REQS ----- */
export const createUser = async (data) => {
    api.post("/users", data)
        .then((res) => (window.location.href = "/login"))
        .catch((err) => console.log(err.response.data));
};

export const getUsers = async () => {
    return api.get("/users");
};

/* ----- SCHEDULES REQS ----- */
export const getSchedules = async () => {
    return api.get("/schedules");
};

export const createSchedule = async (data) => {
    api.post("/schedules", data)
        .then((res) => window.location.reload())
        .catch((err) => console.log(err.response.data));
};

export const updateSchedule = async (data, scheduleId) => {
    console.log(data)
    api.patch(`schedules/${scheduleId}`, data)
        .then((res) => window.location.reload())
        .catch((err) => console.log(err.response.data));
};

export const deleteSchedule = async (scheduleId) => {
    api.delete(`schedules/${scheduleId}`)
        .then((res) => window.location.reload())
        .catch((err) => console.log(err.response.data));
};
