import React from "react";
import { Paragraph, SubHeading } from "../shared/Typography";
import styled from "styled-components";
import { color } from "@mui/system";

const ProductRow = ({ item }) => {
  return (
    <Container>
      <ContentContainer>
        <Paragraph
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            color: "#001EB9s",
          }}
        >
          {item?.sku}
        </Paragraph>
        <SubHeading>{item?.productName}</SubHeading>
        <Paragraph color="#969191">{item?.productDescription}</Paragraph>
      </ContentContainer>
    </Container>
  );
};

export default ProductRow;

const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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
  gap: 1rem;
`;
