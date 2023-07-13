import React, { createContext, useState, useEffect } from "react";
import { getProfile } from "../../services/api";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile()
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err.response.data));
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
