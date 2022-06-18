import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/ProductView";
import { Heading, SubHeading } from "../shared/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AddNewProduct = () => {
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
        <SubHeading color="#1f3bc4">Add new product</SubHeading>
      </FlexContainer>
    </Container>
  );
};

export default AddNewProduct;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
