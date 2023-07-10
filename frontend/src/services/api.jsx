import { create } from "apisauce";

const api = create({
    baseURL: "http://localhost:3000/",
});

api.addAsyncRequestTransform((response) => async () => {
    const token = localStorage.getItem("@STARTPN-TOKEN");

    if (token) response.headers["authorization"] = `Bearer ${token}`;
});

export const createUser = async (data) => {
    api.post("/users", data)
        .then((res) => (window.location.href = "/login"))
        .catch((err) => console.log(err.response.data));
};

export const login = async (data) => {
    api.post("/sessions", data)
        .then((res) => {
            if (!res.data.token) return console.error(res.data.message);

            localStorage.setItem("@STARTPN-TOKEN", res.data.token);
            window.location.href = "/dashboard";
        })
        .catch((err) => console.log(err.response.data));
};

export const getSchedules = async () => {
    return api.get("/schedules");
};