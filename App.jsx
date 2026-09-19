import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Registration */}
                <Route path="/register" element={<Registration />} />

                {/* Main Website */}
                <Route path="/" element={<Navigate to="/home" />} />

                <Route
                    path="/home"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;