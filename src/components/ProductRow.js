import React from "react";
import { Paragraph, SubHeading } from "../shared/Typography";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

const ProductRow = ({ item }) => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <Paragraph color="#2403cb">{item?.sku}</Paragraph>
        <SubHeading>{item?.productName}</SubHeading>
        <Paragraph color="#969191">{item?.productDescription}</Paragraph>
      </ContentContainer>
      <IconButton
        onClick={() => {
          history.push({
            pathname: "/edit-product",
            state: item,
          });
        }}
      >
        <ArrowForwardIosIcon
          style={{
            color: "#1f3bc4",
          }}
        />
      </IconButton>
    </Container>
  );
};

export default ProductRow;

const Container = styled.div`
  padding: 0rem 2rem 1.5rem 2rem;
  border-bottom: 1px solid #52525239;
  &:last-child {
    border-bottom: unset;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: unset;
    justify-content: center;
    padding: 1rem 0.5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
