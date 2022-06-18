import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Container {...props}>
      <>{props.startIcon}</>
      {props.label}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  display: flex;
  min-width: 3rem;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.startIcon ? "0.5rem" : "unset")};
  border-radius: ${(props) => (props.rounded ? "50px" : "5px")};
  padding: ${(props) =>
    props.bordered
      ? "0.45rem 1rem"
      : props.rounded
      ? "0.5rem 4rem"
      : "0.8rem 2rem"};
  background: ${(props) => (props.bordered ? "transparent" : "#001EB9")};
  outline: none;
  border: ${(props) => (props.bordered ? "1px solid #001EB9" : "unset")};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: ${(props) => props.color};
  &:hover {
    background: ${(props) => (props.bordered ? "transparent" : "#1f3bc4")};
  }
  line-height: 1.2rem;
  /* @media (max-width: 800px) {
    font-size: 0.7rem;
    line-height: 0.7rem;
  } */
`;
