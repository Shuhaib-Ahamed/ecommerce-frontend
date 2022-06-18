import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/ProductView";
import { Heading, SubHeading } from "../shared/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EditProduct = () => {
  const location = useLocation();

  console.log(location.state);

  return (
    <Container>
      <FlexContainer>
        <NavLink to="/">
          <Heading color="#162427">Products</Heading>
        </NavLink>{" "}
        <ArrowForwardIosIcon
          style={{
            color: "#1f3bc4",
          }}
        />
        <SubHeading color="#1f3bc4">Edit product</SubHeading>
      </FlexContainer>
    </Container>
  );
};

export default EditProduct;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
