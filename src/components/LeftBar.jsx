import React from "react";
import styled from "styled-components";
import BarChartIcon from "@mui/icons-material/BarChart";
import NoteIcon from "@mui/icons-material/Note";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
const Container = styled.div`
  width: 226px;
  border-right: 1px solid lightgray;
  height: calc(100vh - 88px);
  position: sticky;
  left: 0;
  top: 88px;
`;
const ListContainer = styled.div`
  height: 100%;
  padding-top: 50px;
  /* padding-right: 20px; */
`;
const ListItem = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-left: 0;
  margin-top: 10px;
  padding-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background: #f7f8fa;
    color: #8999eb;
  }
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  color: #445ee2;
  border-radius: 0px 100px 100px 0px;
`;
const ListText = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: #566474;
  margin-left: 10px;
`;

const LeftBar = () => {
  return (
    <Container>
      <ListContainer>
        <ListItem>
          <BarChartIcon style={{ color: "#566474" }} />
          <ListText>Dashboard</ListText>
        </ListItem>
        <ListItem bgColor="#F7F8FA" fontColor="#445EE2">
          <EmojiEventsOutlinedIcon style={{ color: "#445EE2" }} />
          <ListText style={{ color: "#445EE2" }}>Skill Test</ListText>
        </ListItem>
        <ListItem>
          <NoteOutlinedIcon style={{ color: "#566474" }} />
          <ListText>Internships</ListText>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default LeftBar;
