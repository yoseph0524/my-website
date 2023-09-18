import styled from "styled-components";
import image from "../image/1.jpg";
import { Link as RouterLink } from "react-router-dom";

const Layout = styled.div`
  margin-top: 7%;
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
  margin-bottom: 20px;
  border-radius: 0% 15%;
  display: grid;
  padding: 15px 40px;
  h1 {
    cursor: pointer;
    margin: 0;
    height: 6vh;
    display: flex;
    align-items: center;
  }

}
`;

const StyledLink = styled(RouterLink)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
const Img = styled.img`
  width: 18%;
  height: 90%;
  object-fit: cover;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  p {
    margin: 0;
  }
`;

function Projects() {
  return (
    <Layout>
      <Project>
        <StyledLink to="/projects/carrotmarket">
          <h1>Carrot Market (Currently Working)</h1>
        </StyledLink>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
      <Project>
        <h1>Airbnb</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>{" "}
      <Project>
        <h1>Wetube</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>{" "}
      <Project>
        <h1>Netflix</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>{" "}
      <Project>
        <h1>Twitter</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
      <Project>
        <h1>My Website</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
      <Project>
        <h1>PeachParty</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
      <Project>
        <h1>PnetPhilx</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
      <Project>
        <h1>Practice Projects</h1>
        <Wrapper>
          <Img src={image} />
          <p>Description</p>
        </Wrapper>
      </Project>
    </Layout>
  );
}

export default Projects;
