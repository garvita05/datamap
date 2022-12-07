import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: grey;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return (
    <Container>
      Under the supervision of Prof. Sandeep Kumar Singh, JIIT, Noida
    </Container>
  );
};

export default Announcement;
