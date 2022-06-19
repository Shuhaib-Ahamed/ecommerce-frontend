import React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";

const TextField = (props) => {
  return (
    <Container>
      <Paragraph color="#162427">{props.lable}</Paragraph>
      <Input {...props} />
    </Container>
  );
};

export default TextField;

const Input = styled.input`
  border: none;
  cursor: auto;
  outline: none;
  background-color: #f7f7f7;
  padding: 0.7rem 2rem;
  border-radius: 10px;
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  gap: 2rem;
`;
