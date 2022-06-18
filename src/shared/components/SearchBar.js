import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

const SearchBar = (props) => {
  return (
    <Container
      id="search"
      onSubmit={(e) => {
        e.preventDefault();
        // props.setSearch(props.value);
      }}
    >
      <Input {...props} />
      <Button
        rounded
        label="Search"
        startIcon={
          <SearchIcon
            style={{
              color: "#ffffff",
            }}
          />
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
