import styled from "styled-components";

export const Heading = styled.div`
  font-size: 6.5rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-family: "Satoshi", sans-serif;
  color: ${(props) => props.color};
  font-weight: bolder;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
  @media (max-width: 1200px) {
    font-size: 5.6rem;
  }
  @media (max-width: 800px) {
    font-size: 3.6rem;
  }
  @media (max-width: 420px) {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
    text-shadow: 0 3px 10px rgb(2 11 22 / 50%);
  }
`;

export const SubHeading = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};
  font-family: "Satoshi", sans-serif;
  font-weight: normal;
  @media (max-width: 800px) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const Paragraph = styled.div`
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
