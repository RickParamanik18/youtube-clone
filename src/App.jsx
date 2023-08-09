import { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={"Homepage"} />
            <Route path="/watch" element={"video page"} />
            <Route path="*" element={"404"} />
        </Routes>
    );
}

export default App;
