import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { YtContextProvider } from "./context/Yt.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <YtContextProvider>
                <App />
            </YtContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
