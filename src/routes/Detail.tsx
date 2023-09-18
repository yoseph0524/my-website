import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

type Project = {
  title: string;
  src: string;
  description: string;
};

function Detail() {
  const [project, setProject] = useState<Project | null>(null);

  const getProjects = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/manifest.json");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setProject(jsonData.projects[0]); // Assuming you want the first project
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
  console.log(project);

  return (
    <div className={styles.body}>
      {project && (
        <>
          <h1>{project.title}</h1>
          <div className={styles.first}>
            <img className={styles.img} alt={project.title} src={project.src} />
          </div>
          <div className={styles.second}>
            <p>{project.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
