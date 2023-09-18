import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

type Project = {
  title: string;
  src: string;
  description: string;
};

type Projects = Project[];

function Detail() {
  const [projects, setProjects] = useState<Projects>([]);

  const getProjects = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/manifest.json");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setProjects(jsonData.projects);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error: " + error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);

  return (
    <div className={styles.body}>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project, index) => (
          <div key={index}>
            <div className={styles.first}>
              <img
                className={styles.img}
                alt={project.title}
                src={project.src}
              />
            </div>
            <div className={styles.second}>
              <h1 className={styles.h1}>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Detail;
