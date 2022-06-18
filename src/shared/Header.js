import React from "react";
import styled from "styled-components";
import { Paragraph } from "./Typography";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

const Header = ({ username }) => {
  const history = useHistory();

  const logOut = async () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Container>
      <FlexContainer>
        <Paragraph color="#162427" style={{ textTransform: "uppercase" }}>
          {username}
        </Paragraph>
        <IconButton onClick={logOut}>
          <Avatar sx={{ m: 0, bgcolor: "#001EB9" }}></Avatar>
        </IconButton>
      </FlexContainer>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
    padding: 0rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 800px) {
    gap: 0.5rem;
  }
`;
