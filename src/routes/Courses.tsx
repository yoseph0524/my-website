import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  normal: { scale: 1 },
  hover: { scale: 1.2 },
};

const modalVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    scale: 0.75,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
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
    <div className={`course-container ${selectedCourse ? "modalActive" : ""}`}>
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
                <h4>{course.coursename}</h4>
                <p>Grade: {course.grade}</p>
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
            exit="exit"
            onClick={() => setSelectedCourse(null)}
          >
            <h2>{selectedCourse.name}</h2>
            <p>Grade: {selectedCourse.grade}</p>
            <p>{selectedCourse.learned}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Course;
