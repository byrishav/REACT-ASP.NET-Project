import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Courses from "./Courses";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Courses - "/" */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Courses />
                        </>
                    }
                />

                {/* Home */}
                <Route
                    path="/home"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />

                {/* Login */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Registration */}
                <Route
                    path="/register"
                    element={<Registration />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
