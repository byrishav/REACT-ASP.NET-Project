import { useEffect, useState } from "react";
import axios from "axios";
import { FaClock, FaArrowRight } from "react-icons/fa";
import "./Courses.css";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const fetchCourses = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7040/api/Values/courses"
                );
                setCourses(response.data);
            } catch (error) {
                console.log("Error fetching courses:", error);
            }
        };

        fetchCourses();

    }, []);

    return (
        <div className="courses-page">

            <div className="courses-header">
                <span className="section-tag">Agamya Eduventure</span>
                <h2>Our Courses</h2>
                <p>Industry driven programs designed to build real, job ready skills.</p>
            </div>

            <div className="courses-grid">

                {courses.map((course, index) => (

                    <div className="course-card" key={index}>

                        <div className="course-image-wrap">
                           <img
                             src={`https://localhost:7040/images/courses/${course.image}`}
                             alt={course.name}
                             className="course-image"
                            />
                                
                            
                            <span className="course-duration-badge">
                                <FaClock /> {course.duration}
                            </span>
                            
                        </div>

                        <div className="course-body">

                            <h3>{course.name}</h3>
                            <p className="course-description">{course.description}</p>

                            <div className="course-footer">
                                <span className="course-fees">₹{course.fees}</span>
                                <button className="course-explore">
                                    Explore <FaArrowRight />
                                </button>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Courses;