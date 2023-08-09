import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { YtContext } from "./context/Yt.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <YtContext>
                <App />
            </YtContext>
        </BrowserRouter>
    </React.StrictMode>
);
