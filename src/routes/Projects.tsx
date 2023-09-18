import styled from "styled-components";

const Layout = styled.div`
  margin-top: 14%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Project = styled.div`
  width: 80vw;
  height: 30vh;
  background-color: gray;
  margin-bottom: 15px;
  border-radius: 0% 15%;
  display: grid;

  padding: 10px 20px;
  h1 {
    margin: 0;
  }
`;

function Projects() {
  return (
    <Layout>
      <Project>
        <h1>Youtube</h1>
        <img src="dasf"></img>
      </Project>
      <Project>Netflix</Project>
    </Layout>
  );
}

export default Projects;
