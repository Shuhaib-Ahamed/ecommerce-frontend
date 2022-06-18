import React from "react";
import styled from "styled-components";
import ProductRow from "../components/ProductRow";
import { SubHeading } from "../shared/Typography";

const SearchPage = ({ products, searchTitle }) => {
  return (
    <Container>
      <SubHeading color="#969191">{`${products?.length} found for ${searchTitle}`}</SubHeading>
      {products?.map((item, index) => {
        return <ProductRow item={item} key={index} index={index} />;
      })}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
