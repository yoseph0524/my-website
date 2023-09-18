import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./courses.css";

type Course = {
  name: string;
  grade: string;
  learned: string;
};

type SemesterCourses = {
  [semester: string]: Course[];
};

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.2 },
};

const modalVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const Course: React.FC = () => {
  const [courses, setCourses] = useState<SemesterCourses>({});

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleClickCourse = (course: Course) => {
    setSelectedCourse(course);
  };

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
                onClick={() => handleClickCourse(course)}
              >
                <h2>{course.name}</h2>
                <p>Grade: {course.grade}</p>
                <p>Learned: {course.learned}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="course-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedCourse(null)}
          >
            <h2>{selectedCourse.name}</h2>
            <p>Grade: {selectedCourse.grade}</p>
            <p>Learned: {selectedCourse.learned}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Course;
