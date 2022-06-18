import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";
import { getProductById } from "../../api/api";
import { CircularProgress } from "@mui/material";

const SearchBar = (props) => {
  const [loading, setLoading] = useState(false);

  //Search Product
  const handleSearch = async (id) => {
    if (props.value != "") {
      setLoading(true);
      try {
        const response = await getProductById({
          id: id,
          token: `Bearer ${localStorage.token}`,
        });

        if (response.status === 200) {
          let arr = [];
          arr.push(response.data);
          props.setProducts(arr);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container
      id="search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(e.target[0].value);
      }}
    >
      <Input {...props} />
      <Button
        disabled={loading}
        rounded
        label="Search"
        startIcon={
          loading ? (
            <CircularProgress
              style={{
                color: "#fff",
              }}
              size={20}
            />
          ) : (
            <SearchIcon
              style={{
                color: "#fff",
              }}
            />
          )
        }
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background-color: #f1f1f1;
  padding: 0.2rem 1rem;
`;

const Input = styled.input`
  border: none;
  width: 70%;
  height: 50%;
  cursor: auto;
  outline: none;
  background-color: transparent;
  margin: 1rem 1rem 1rem 2rem;
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  color: ${(props) => props.color};
  line-height: 1.2rem;
  @media (max-width: 800px) {
    font-size: 0.8rem;
    line-height: 1.4rem;
  }
`;
