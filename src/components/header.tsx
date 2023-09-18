import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  font-size: 14px;
  padding: 20px 0px;
  color: white;
  margin: 0;
  background-color: black !important;
  height: 4%;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-size: 25px;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const navVariants = {
  start: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

function Header() {
  const myprofileMatch = useMatch("/myprofile");
  const projectsMatch = useMatch("/projects");
  const coursesMatch = useMatch("/courses");
  const contactsMatch = useMatch("/contacts");
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 100) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("start");
    }
  });
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"start"}>
      <Col>
        <Items>
          <Item>
            <Link
              to="/myprofile"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              My Profile {myprofileMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link
              to="/projects"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Projects {projectsMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link
              to="/courses"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Courses {coursesMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link
              to="/contacts"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Contacts {contactsMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;
