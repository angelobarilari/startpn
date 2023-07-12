import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../../services/api";

export const UsersContext = createContext({});

function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((res) => setUsers(res.data.users))
            .catch((err) => console.log(err.response.data));
    }, []);

    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}

export default UsersProvider;
