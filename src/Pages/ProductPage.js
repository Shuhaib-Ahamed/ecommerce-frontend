import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllProducts } from "../api/api";
import Table from "../shared/components/Table";
import { Paragraph } from "../shared/Typography";

const ProductPage = ({ products, setProducts }) => {
  const headerData = ["SKU", "IMAGE", "PRODUCT NAME", "PRICE", ""];

  return (
    <Container>
      {products?.length > 0 ? (
        <Table
          headerData={headerData}
          tableRowData={products}
          setTableRowData={setProducts}
        />
      ) : (
        <FlexRow>
          <Paragraph
            minWidth="4rem"
            color="
        #162427a2"
          >
            No Items Available
          </Paragraph>
        </FlexRow>
      )}
    </Container>
  );
};

export default ProductPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  @media (max-width: 800px) {
    padding: 1rem 0.5rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
