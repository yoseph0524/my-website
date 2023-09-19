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
  background-color: rgba(128, 128, 128, 0.5);
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
  width: 15%;
  height: 40%;
  object-fit: cover;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  p {
    margin: 0;
    margin-top: 20px;
    font-size: 25px;
  }
`;

function Projects() {
  return (
    <Layout>
      <Project>
        <StyledLink to="/projects/carrotmarket">
          <h1>Carrot Market (Currently Working On)</h1>
          <Wrapper>
            <Img src={image} />
            <p>Description</p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/airbnb">
          <h1>Airbnb</h1>
          <Wrapper>
            <Img src={image} />
            <p>Description</p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/wetube">
          <h1>Wetube</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              A comprehensive a video uploading and sharing portal that mirrors
              essential functionalities. Users can stream videos, comment,
              search, and even record and upload their own content.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/chatdoge">
          <h1>Chat Doge</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              Developed a program where 'Doge' (an AI) predicts fortunes based
              on users' birthdays and the current date. Integrated a commercial
              banner to generate revenue.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/netflix">
          <h1>Netflix</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              A Netflix clone equipped with cutting-edge React features and
              libraries, offering capabilities like routing, styling, data
              fetching, state management, and animations to mirror the user
              experience of the original platform.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/twitter">
          <h1>Twitter</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              A comprehensive Twitter clone developed using Firebase and
              React.js. The project highlights easy authentication methods and
              protected pages while leveraging Google Cloud Storage for data
              handling.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/peachparty">
          <h1>PeachParty</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              Developed a 2D board game inspired by Super Mario using only C++.
              All character movements and interactions with the various board
              boxes were meticulously implemented.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/pnetphilx">
          <h1>PnetPhilx</h1>
          <Wrapper>
            <Img src={image} />
            <p>
              Crafted a Movie Recommendation Generator App that swiftly provides
              tailored movie suggestions. Designed to deliver results in under a
              second, even with a database of approximately 40K movies and 100K
              users.
            </p>
          </Wrapper>
        </StyledLink>
      </Project>
      <Project>
        <StyledLink to="/projects/practiceprojects">
          <h1>Practice Projects</h1>
          <Wrapper>
            <Img src={image} />
            <p>Description</p>
          </Wrapper>
        </StyledLink>
      </Project>
    </Layout>
  );
}

export default Projects;
