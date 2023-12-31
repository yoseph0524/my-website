import styled from "styled-components";
import image from "../image/1.jpg";
import image2 from "../image/2.JPG";
import image3 from "../image/3.JPG";
import image4 from "../image/4.JPG";
import image5 from "../image/5.JPG";

import React, { useState } from "react";
import Iconbutton from "../components/Iconbutton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 6%;
  height: 89vh;
  padding: 50px;
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
  margin-left: 50px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  padding: 15px;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  max-width: 800px;
  overflow-y: auto; /* Allows vertical scrolling when content exceeds max-height */

  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9; /* Light gray background */
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  a {
    color: #007bff; /* Blue color for links */
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #0056b3; /* Darker blue on hover */
  }

  p {
    margin-bottom: 20px; /* Space between paragraphs */
  }

  ul {
    list-style-type: disc; /* Bullet points for list */
    padding-left: 40px; /* Indent list items */
  }

  li {
    margin-bottom: 10px; /* Space between list items */
  }
`;

const ContactButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 20px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarges the button on hover */
  }

  &:focus {
    outline: none; /* Removes the browser default focus outline */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); /* Adds a glowing effect when the button is focused */
  }
`;

const Images = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <motion.img
        src={src}
        alt="Selected"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        style={{
          width: "50vw",
          height: "50vw",
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
}

function MyProfile() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClickImage = (src: string) => {
    setSelectedImage(src);
  };
  return (
    <Wrapper>
      <Img src={image} />
      <Summary>
        <p>
          Hello! I'm Yoseph, and it's great to connect with you. Currently, I'm
          pursuing a major in Computer Science and Engineering at UCLA. My
          aspiration is to excel as a full-stack engineer.
        </p>

        <p>
          My portfolio showcases diverse projects, each reflecting my passion
          for innovative web development. Some highlights include:
        </p>
        <ul>
          <li>A platform for trading used items.</li>
          <li>An accommodation-sharing service.</li>
          <li>A video uploading and sharing portal.</li>
        </ul>

        <p>
          Not just limited to coding, I've also ventured into the world of
          design with skills in UX, UI animations, and icon illustration. My
          proficiency in coding enables me to swiftly prototype and validate
          immersive user experiences.
        </p>

        <p>
          Interested in exploring more about my work? &nbsp;
          <Link to="/projects">
            Click here to dive deeper into my projects!
          </Link>
        </p>
        <section>
          <h2>Personal Interests</h2>
          <p>
            Outside of my professional endeavors, I have a fervor for
            sports—both watching and playing. The strumming of a guitar and the
            joy of singing are two of my other cherished pastimes.
          </p>
        </section>
        <section>
          <p>
            I'm always eager to explore new projects and collaborations. Don't
            hesitate to reach out and share your ideas with me.
          </p>
          <ContactButton to="/contacts">Contact Me</ContactButton>
          <Iconbutton />
        </section>
      </Summary>
      <Images>
        {[image2, image3, image4, image5].map((imageSrc, index) => (
          <Img
            key={index}
            src={imageSrc}
            onClick={() => handleClickImage(imageSrc)}
          />
        ))}
      </Images>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyProfile;
