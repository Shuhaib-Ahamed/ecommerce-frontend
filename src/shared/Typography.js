import styled from "styled-components";

export const Heading = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: "Satoshi", sans-serif;
  color: ${(props) => props.color};
  font-weight: 900;
  @media (max-width: 800px) {
    font-size: 1.2rem;

  }
`;

export const SubHeading = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};
  font-family: "Satoshi", sans-serif;
  font-weight: 800;
  @media (max-width: 800px) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const Paragraph = styled.div`
  min-width: ${(props) => props.minWidth};
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  color: ${(props) => props.color};
  line-height: 1.2rem;
  @media (max-width: 800px) {
    font-size: 0.8rem;
    line-height: 1.4rem;
  }
`;
