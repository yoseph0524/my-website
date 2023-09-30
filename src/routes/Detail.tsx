import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { motion } from "framer-motion";

type Project = {
  title: string;
  src: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
  url: string;
  description: string;
  used: string;
  learned: string;
  improvements: string;
  website: string;
  code: string;
};

function Detail() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalImage("");
  };
  const [project, setProject] = useState<Project | null>(null);
  const { projectId } = useParams<{ projectId: string }>();

  const getProjects = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/projects.json");

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

  const image = process.env.PUBLIC_URL;

  return (
    <div className={styles.body}>
      {isModalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <img
              src={modalImage}
              alt="Modal content"
              className={styles.modalImage}
            />
            <button onClick={closeModal} className={styles.modalCloseBtn}>
              X
            </button>
          </div>
        </div>
      )}
      <div className={styles.header}>
        <h1>{project.title}</h1>

        <div className={styles.view}>
          {project.website !== "" ? (
            <a href={project.website}>
              <button>View Web</button>
            </a>
          ) : null}
          {project.code !== "" ? (
            <a href={project.code}>
              <button>View Code</button>
            </a>
          ) : null}
        </div>
      </div>

      <div className={styles.paragraph}>
        <div className={styles.text}>
          <h2>Summary</h2>
          <p>{project.description}</p>
        </div>
        <img
          className={styles.img}
          alt={project.title}
          src={image + project.src.one}
          onClick={() => openModal(image + project.src.one)}
        />
      </div>
      {project.used !== "" ? (
        <div className={styles.paragraph}>
          <div className={styles.text}>
            <h2>What I Used</h2>
            <p>{project.used}</p>
          </div>
          <img
            className={styles.img}
            alt={project.title}
            src={image + project.src.two}
            onClick={() => openModal(image + project.src.two)}
          />
        </div>
      ) : null}
      {project.learned !== "" ? (
        <div className={styles.paragraph}>
          <div className={styles.text}>
            <h2>What I Learned</h2>
            <p>{project.learned}</p>
          </div>
          <img
            className={styles.img}
            alt={project.title}
            src={image + project.src.three}
            onClick={() => openModal(image + project.src.three)}
          />
        </div>
      ) : (
        <div className={styles.paragraph}>
          <div className={styles.pages}>
            <div>
              <h2>Kokoa Talk</h2>
              <a href="https://github.com/yoseph0524/kokoa-clone-2023">
                <button>View Web</button>
              </a>
              <a href="https://yoseph0524.github.io/kokoa-clone-2023/">
                <button>View Code</button>
              </a>
            </div>
            <div>
              <h2>Javascript Front Page</h2>
              <a href="https://yoseph0524.github.io/Momentum-JavaScript-Project/">
                <button>View Web</button>
              </a>
              <a href="https://github.com/yoseph0524/Momentum-JavaScript-Project">
                <button>View Code</button>
              </a>
            </div>
            <div>
              <h2>React Todo</h2>
              <a href="https://yoseph0524.github.io/react-todo/">
                <button>View Web</button>
              </a>
              <a href="https://github.com/yoseph0524/react-todo">
                <button>View Code</button>
              </a>
            </div>
            <div>
              <h2>React Crypto</h2>
              <a href="https://yoseph0524.github.io/react-master">
                <button>View Web</button>
              </a>
              <a href="https://github.com/yoseph0524/react-master">
                <button>View Code</button>
              </a>
            </div>
            <div>
              <h2>React Movie</h2>
              <a href="https://yoseph0524.github.io/react-for/">
                <button>View Web</button>
              </a>
              <a href="https://github.com/yoseph0524/react-for">
                <button>View Code</button>
              </a>
            </div>
          </div>

          <img
            className={styles.img}
            alt={project.title}
            src={image + project.src.two}
          />
        </div>
      )}
      {project.improvements !== "" ? (
        <div className={styles.paragraph}>
          <div className={styles.text}>
            <h2>Potential Improvements</h2>
            <p>{project.improvements}</p>
          </div>
          <img
            className={styles.img}
            alt={project.title}
            src={image + project.src.four}
            onClick={() => openModal(image + project.src.four)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
