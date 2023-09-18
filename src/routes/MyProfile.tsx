import styled from "styled-components";
import image from "../image/1.jpg";

const Wrapper = styled.div`
  margin-top: 6%;
  height: 89vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 300px 1fr 1fr;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Summary = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 15px;
`;

const Hobby = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 15px;
`;

const Images = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 25px 200px;
`;

function MyProfile() {
  return (
    <Wrapper>
      <Img src={image} />
      <Summary>My Profile</Summary>
      <Hobby>My Hobby</Hobby>
      <Images>
        <span style={{ gridColumnStart: 1, gridColumnEnd: -1 }}>
          More Image of Me
        </span>
        <Img src={image} />
        <Img src={image} />
        <Img src={image} />
        <Img src={image} />
        <Img src={image} />
        <Img src={image} />
      </Images>
    </Wrapper>
  );
}

export default MyProfile;
