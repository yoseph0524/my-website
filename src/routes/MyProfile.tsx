import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 11%;
  height: 89vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 0.6fr 0.6fr 0.6fr;
`;

const Summary = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Hobby = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Images = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 25px 1fr 1fr;
`;

function MyProfile() {
  return (
    <Wrapper>
      <img src={"../images/1.jpg"} />
      <Summary>My Profile</Summary>
      <Hobby>My Hobby</Hobby>
      <Images>
        <span style={{ gridColumnStart: 1, gridColumnEnd: -1 }}>
          More Image of Me
        </span>
        {/* <img src={"../images/1.jpg"} />
        <img src={"../images/2.jpg"} />
        <img src={"../images/3.jpg"} />
        <img src={"../images/4.jpg"} />
        <img src={"../images/5.jpg"} />
        <img src={"../images/6.jpg"} /> */}
      </Images>
    </Wrapper>
  );
}

export default MyProfile;
