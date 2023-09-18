import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const IconButton = styled.a`
  display: inline-block;
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px; // Spacing between buttons
  transition: transform 0.2s; // Smooth transformation on hover

  &:hover {
    transform: scale(1.1); // Slightly enlarges the button on hover
  }

  &:last-child {
    margin-right: 0; // Ensures the last button doesn't have a right margin
  }
`;

const SocialIcons = () => (
  <div>
    <IconButton
      href="https://www.linkedin.com/in/yoseph-chong-7a8992259/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
    </IconButton>
    <IconButton
      href="https://www.instagram.com/yoseph524/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
    </IconButton>
    <IconButton
      href="https://github.com/yoseph0524"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
    </IconButton>
  </div>
);

export default SocialIcons;
