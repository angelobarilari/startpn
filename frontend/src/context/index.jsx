import React from "react";
import UserProvider from "./user";

function Provider({ children }) {
    return <UserProvider>{children}</UserProvider>;
}

export default Provider;
