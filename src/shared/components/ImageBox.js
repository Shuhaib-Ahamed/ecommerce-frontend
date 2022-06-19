import React from "react";
import { Image, ImageWrapper } from "../../components/TableRow";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ImageBox = ({ item, images, setImages, index }) => {
  const handleDeleteImage = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  return (
    <Container>
      <AbsoluteIcon onClick={() => handleDeleteImage(index)}>
        <CloseIcon
          fontSize="small"
          style={{
            color: "#545454",
          }}
        />
      </AbsoluteIcon>
      <ImageWrapper>
        <Image src={item?.preview ? item.preview : item} />
      </ImageWrapper>
    </Container>
  );
};

export default ImageBox;

const AbsoluteIcon = styled.div`
  position: absolute;
  cursor: pointer;
  border: 0.5px solid #68686835;
  height: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  place-items: center;
  display: grid;
  width: 20px;
  top: -10px;
  z-index: 99;
  right: -10px;
  border-radius: 50px;
  padding: 0.1rem;
  background-color: #ffffff;
`;

const Container = styled.div`
  position: relative;
`;
