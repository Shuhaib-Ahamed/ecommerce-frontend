import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../shared/components/Button";
import { Heading } from "../shared/Typography";
import StarIcon from "@mui/icons-material/Star";
import SearchBar from "../shared/components/SearchBar";
import FavouriteProductPage from "../Pages/FavouriteProductPage";
import SearchPage from "../Pages/SearchPage";
import ProductPage from "../Pages/ProductPage";
import InventoryIcon from "@mui/icons-material/Inventory";
import { getAllProducts } from "../api/api";

const ProductView = () => {
  const [view, setView] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await getAllProducts({
      token: `Bearer ${localStorage.token}`,
    });
    if (response?.status === 200) {
      setProducts(response.data);
    }
  };

  console.log("products", products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Heading color="#162427">
        {view === 1 ? "Favourite Products" : "Products"}
      </Heading>
      <ControlSection>
        <SearchBar
          color="#162427"
          placeholder="Search for Products"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <ButtonContainer>
          <Button label="New Product" />
          <Button
            onClick={() => {
              if (view === 0) {
                setView(1);
              } else {
                setView(0);
              }
            }}
            bordered
            startIcon={
              view === 1 ? (
                <InventoryIcon
                  style={{
                    color: "#001EB9",
                  }}
                />
              ) : (
                <StarIcon
                  style={{
                    color: "#001EB9",
                  }}
                />
              )
            }
          />
        </ButtonContainer>
      </ControlSection>

      {(() => {
        switch (view) {
          case 0:
            return <ProductPage products={products} />;
          case 1:
            return (
              <ProductPage
                products={
                  localStorage?.favItems && JSON.parse(localStorage?.favItems)
                }
              />
            );
          case 2:
            return <SearchPage />;

          default:
            return null;
        }
      })()}
    </Container>
  );
};

export default ProductView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlSection = styled.div`
  padding: 1.5rem 0rem;
  display: grid;
  place-content: center;
  gap: 3rem;
  grid-template-columns: 4fr 1fr;
  @media (max-width: 1500px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    place-content: unset;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
