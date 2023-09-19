import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./courses.css";

type Course = {
  name: string;
  coursename: string;
  grade: string;
  learned: string;
};

type SemesterCourses = {
  [semester: string]: Course[];
};

const boxVariants = {
  normal: { scale: 1, zIndex: 1, backgroundColor: "initial" },
  hover: { scale: 1.2, zIndex: 5, backgroundColor: "white" },
};

const Course: React.FC = () => {
  const [courses, setCourses] = useState<SemesterCourses>({});

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="course-container">
      {Object.entries(courses).map(([semester, semesterCourses]) => (
        <div className="semester" key={semester}>
          <h1 className="semester-title">{semester}</h1>
          <div className="courses">
            {semesterCourses.map((course, index) => (
              <motion.div
                key={index}
                className="course"
                variants={boxVariants}
                initial="normal"
                whileHover="hover"
              >
                <h2>{course.name}</h2>
                <h4>{course.coursename}</h4>
                <p>Grade: {course.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
