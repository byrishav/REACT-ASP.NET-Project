import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    return (
        <nav className="navbar">

            <h2 className="nav-logo" onClick={() => navigate("/home")}>
                AGAMYA EDUVENTURE
            </h2>

            <div className="nav-links">

                <button className="nav-btn" onClick={() => navigate("/home")}>
                    Home
                </button>

                <button className="nav-btn" onClick={() => navigate("/about")}>
                    About
                </button>

                <button className="nav-btn" onClick={() => navigate("/courses")}>
                    Courses
                </button>

                <button className="nav-btn" onClick={() => navigate("/contact")}>
                    Contact
                </button>

            </div>

            <button className="nav-login" onClick={() => navigate("/login")}>
                Login
            </button>

        </nav>
    );
}

export default Navbar;