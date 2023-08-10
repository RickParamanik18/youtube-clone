import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/watch" element={"video page"} />
            <Route path="*" element={"404"} />
        </Routes>
    );
}

export default App;
