import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const handleRegister = async () => {

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (email === "") {
            alert("Please enter your email");
            return;
        }

        if (password === "") {
            alert("Please enter your password");
            return;
        }

        if (confirmPassword === "") {
            alert("Please confirm your password");
            return;
        }

        if (age === "") {
            alert("Please enter your age");
            return;
        }

        if (course === "") {
            alert("Please select a course");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const student = {
            userName: name,
            email: email,
            uPassword: password,
            age: Number(age),
            course: course
        };

        const response = await axios.post(
            "https://localhost:7092/api/Values",
            student
        );

        console.log(response.data);
    };

    return (
        <div className="auth-wrapper">

            <div className="auth-brand">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="brand-content">
                    <h2 className="brand-logo">
                        AGAMYA EDUVENTURE<span>.</span>
                    </h2>

                    <h1 className="brand-heading">
                        Start your learning journey today.
                    </h1>

                    <p className="brand-text">
                        Join thousands of students mastering new skills with hands-on courses in Java, Python, Web Development and more.
                    </p>
                </div>
            </div>

            <div className="auth-form-side">
                <div className="auth-card">

                    <h1 className="auth-title">
                        Create Account
                    </h1>

                    <p className="auth-subtitle">
                        Join us and start learning today
                    </p>

                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="auth-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="auth-row">

                        <input
                            className="auth-input"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            className="auth-input"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                    </div>

                    <div className="auth-row">

                        <input
                            className="auth-input"
                            type="number"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />

                        <select
                            className="auth-input"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            <option value="">Select Course</option>
                            <option value="Java">Java</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Python">Python</option>
                            <option value="SQL">SQL</option>
                            <option value="ASP.NET Core">ASP.NET Core</option>
                        </select>

                    </div>

                    <button
                        className="auth-button"
                        onClick={handleRegister}
                    >
                        Create Account
                    </button>

                    <p className="auth-footer">
                        Already have an account?{" "}

                        <span
                            className="auth-link"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Registration;