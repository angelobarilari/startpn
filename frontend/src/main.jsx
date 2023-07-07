import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./context";
import App from "./App.jsx";
import "./index.css";
import AppStack from "./routes/AppStack";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <Provider>
                <App />
                <AppStack />
            </Provider>
    </React.StrictMode>
);
