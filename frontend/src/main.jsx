import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppStack from "./routes/AppStack";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <AppStack />
    </React.StrictMode>
);
