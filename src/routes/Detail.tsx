import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

type Project = {
  title: string;
  src: string;
  url: string;
  description: string;
  used: string;
  learned: string;
  improvements: string;
};

function Detail() {
  const [project, setProject] = useState<Project | null>(null);
  const { projectId } = useParams<{ projectId: string }>();

  console.log(projectId);

  const getProjects = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/manifest.json");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      if (projectId) {
        const selectedProject = jsonData.projects.find(
          (p: Project) => p.url === projectId
        );

        if (selectedProject) {
          setProject(selectedProject);
        }
      }
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
  }, [projectId]);

  if (!project) return <div>Loading...</div>;

  const image = process.env.PUBLIC_URL + "/" + project.src;

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>{project.title}</h1>
        <div className={styles.view}>
          <a href={project.src}>
            <button>View Web</button>
          </a>
          <a href={project.src}>
            <button>View Code</button>
          </a>
        </div>
      </div>

      <div className={styles.paragraph}>
        <div className={styles.text}>
          <h2>Summary</h2>
          <p>{project.description}</p>
        </div>
        <img className={styles.img} alt={project.title} src={image} />
      </div>
      <div className={styles.paragraph}>
        <div className={styles.text}>
          <h2>What I Used</h2>
          <p>{project.used}</p>
        </div>
        <img className={styles.img} alt={project.title} src={image} />
      </div>
      <div className={styles.paragraph}>
        <div className={styles.text}>
          <h2>What I Learned</h2>
          <p>{project.learned}</p>
        </div>
        <img className={styles.img} alt={project.title} src={image} />
      </div>
      <div className={styles.paragraph}>
        <div className={styles.text}>
          <h2>Potential Improvements</h2>
          <p>{project.improvements}</p>
        </div>
        <img className={styles.img} alt={project.title} src={image} />
      </div>
    </div>
  );
}

export default Detail;
