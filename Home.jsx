import { useNavigate } from "react-router-dom";
import { FaBullseye, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="home">

            {/* HERO SECTION */}
            <section className="hero">
                <span className="hero-tag">India's Trusted Learning Platform</span>

                <h1 className="hero-title">
                    Build the career you deserve, <span>starting today.</span>
                </h1>

                <p className="hero-subtitle">
                    Agamya Eduventure delivers industry-driven courses in Java, Python,
                    Web Development, SQL, and ASP.NET Core — built by experts, taught for outcomes.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => navigate("/courses")}>
                        Explore Courses
                    </button>
                    <button className="btn-outline" onClick={() => navigate("/about")}>
                        Learn More
                    </button>
                </div>
            </section>

            {/* STATS */}
            <section className="stats">
                <div className="stat-item">
                    <h2>25,000+</h2>
                    <p>Students Trained</p>
                </div>
                <div className="stat-item">
                    <h2>50+</h2>
                    <p>Industry Courses</p>
                </div>
                <div className="stat-item">
                    <h2>120+</h2>
                    <p>Expert Mentors</p>
                </div>
                <div className="stat-item">
                    <h2>94%</h2>
                    <p>Placement Rate</p>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                <div className="section-head">
                    <span className="section-tag">Why Choose Us</span>
                    <h2>Learning designed for real careers</h2>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaBullseye /></div>
                        <h3>Industry-Aligned Curriculum</h3>
                        <p>Courses built with input from hiring companies, updated regularly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaChalkboardTeacher /></div>
                        <h3>Expert Mentorship</h3>
                        <p>Learn directly from professionals working at top companies.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaBriefcase /></div>
                        <h3>Placement Assistance</h3>
                        <p>Dedicated career support, resume reviews, and interview prep.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <h2>Ready to start your journey?</h2>
                <p>Join thousands of learners building careers with Agamya Eduventure.</p>
                <button className="btn-primary" onClick={() => navigate("/register")}>
                    Get Started Today
                </button>
            </section>

        </div>
    );
}

export default Home;