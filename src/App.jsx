import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Videopage from "./pages/Videopage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/watch" element={<Videopage />} />
            <Route path="*" element={"404"} />
        </Routes>
    );
}

export default App;
