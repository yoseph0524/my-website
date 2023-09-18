import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: black;
  margin-bottom: 150px;
`;

const Slider = styled.div`
  position: relative;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

function Courses() {
  return (
    <Wrapper>
      <Slider>
        <AnimatePresence>
          <Row>
            {[1, 2, 3, 4, 5].map((i) => (
              <Box key={i}>{i}</Box>
            ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </Wrapper>
  );
}
export default Courses;
