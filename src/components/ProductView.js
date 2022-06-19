import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../shared/components/Button";
import { Heading } from "../shared/Typography";
import StarIcon from "@mui/icons-material/Star";
import SearchBar from "../shared/components/SearchBar";
import SearchPage from "../Pages/SearchPage";
import ProductPage from "../Pages/ProductPage";
import InventoryIcon from "@mui/icons-material/Inventory";
import { getAllProducts } from "../api/api";
import { useHistory } from "react-router-dom";

const ProductView = () => {
  const [view, setView] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(null);
  const history = useHistory();

  const getProducts = async () => {
    const response = await getAllProducts({
      token: `Bearer ${localStorage.token}`,
    });
    if (response?.status === 200) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (search != "") {
      setView(2);
    } else {
      setView(0);
    }
  }, [search]);

  return (
    <Container>
      <Heading color="#162427">
        {view === 1 ? "Favourite Products" : "Products"}
      </Heading>
      <ControlSection>
        <SearchBar
          type="text"
          setProducts={setProducts}
          autocomplete="off"
          name="searchInput"
          id="search-input"
          color="#162427"
          placeholder="Search for Products"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <ButtonContainer>
          <Button
            label="New Product"
            onClick={() => {
              history.push("/add-new-product");
            }}
          />
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
            return (
              <ProductPage products={products} setProducts={setProducts} />
            );
          case 1:
            return (
              <ProductPage
                setProducts={setProducts}
                products={
                  localStorage?.favItems && JSON.parse(localStorage?.favItems)
                }
              />
            );
          case 2:
            return (
              <SearchPage
                searchTitle={search}
                products={
                  products?.length > 0 &&
                  products?.filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (item._id && item._id.includes(search)) {
                      return item;
                    } else if (
                      item.productName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                }
              />
            );

          default:
            return null;
        }
      })()}
    </Container>
  );
};

export default ProductView;

export const Container = styled.div`
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
