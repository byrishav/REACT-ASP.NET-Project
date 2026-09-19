import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        if (username === "") {
            alert("Please enter your email");
            return;
        }

        if (password === "") {
            alert("Please enter your password");
            return;
        }

        const loginData = {
            username: username,
            password: password
        };

        try {

            const response = await axios.post(
                "https://localhost:7092/api/Values/login",
                loginData
            );

            console.log(response.data);
            alert("Login successful!");

        } catch (error) {

            console.log(error);
            alert("Invalid email or password");

        }
    };

    return (
        <div className="auth-wrapper">

            <div className="auth-brand">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="brand-content">
                    <h2 className="brand-logo">SARGAM<span>.</span></h2>
                    <h1 className="brand-heading">Welcome back. Let's keep learning.</h1>
                    <p className="brand-text">
                        Log in to continue your courses, track your progress, and pick up right where you left off.
                    </p>
                </div>
            </div>

            <div className="auth-form-side">
                <div className="auth-card">

                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Login to your account to continue</p>

                    <input
                        className="auth-input"
                        type="email"
                        placeholder="Enter your email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="auth-button" onClick={handleLogin}>
                        Login
                    </button>

                    <p className="auth-footer">
                        Don't have an account?{" "}

                        <span
                            className="auth-link"
                            onClick={() => navigate("/register")}
                        >
                            Create a new account
                        </span>

                    </p>

                </div>
            </div>

        </div>
    );
}

export default Login;