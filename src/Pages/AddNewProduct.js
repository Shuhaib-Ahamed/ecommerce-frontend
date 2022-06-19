import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/ProductView";
import { Heading, Paragraph, SubHeading } from "../shared/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "../shared/components/TextField";
import Button from "../shared/components/Button";
import { useState } from "react";
import ImageBox from "../shared/components/ImageBox";
import { CircularProgress } from "@mui/material";
import { addProduct } from "../api/api";
import ImageFileUpload from "../components/ImageFileUpload";
import { AddImageToIPFS } from "../utils/IPFSService";

const AddNewProduct = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const readURL = (e) => {
  //   let files = e.target.files;
  //   const newImageArr = [];
  //   for (let i = 0; i < files.length; i++) {
  //     newImageArr.push({
  //       preview: URL.createObjectURL(files[i]),
  //       data: files[i],
  //     });
  //   }
  //   setImages(newImageArr);
  // };

  const getFormDataById = (id) => {
    var product = {};
    let formData = new FormData(document.getElementById(id));
    for (let [key, value] of formData.entries()) {
      product[key] = value;
    }
    return product;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imageArr = [];
    var productObject = getFormDataById("addProductForm");

    try {
      if (images?.length > 0) {
        for (let i = 0; i < images?.length; i++) {
          const ipfsData = await AddImageToIPFS(images && images[i]);
          const previewImageUrl = `https://ipfs.infura.io/ipfs/${ipfsData.ipfsHash}`;
          imageArr.push(previewImageUrl);
        }
        productObject.images = imageArr;

        const response = await addProduct({
          body: productObject,
          token: `Bearer ${localStorage.token}`,
        });

        //Reroute
        if (response.status === 200) {
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FlexContainer>
        <NavLink to="/">
          <Heading color="#162427">Products</Heading>
        </NavLink>{" "}
        <ArrowForwardIosIcon
          style={{
            color: "#1f3bc4",
          }}
        />
        <SubHeading color="#1f3bc4">Add new product</SubHeading>
      </FlexContainer>
      <FormContainer
        id="addProductForm"
        name="addProductForm"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <FormGrid>
          <TextField
            lable="SKU"
            type="text"
            name="sku"
            id="skq"
            required
            placeholder="SKU"
          />
          <TextField
            lable="Price"
            type="number"
            required
            name="price"
            id="price"
            placeholder="Price"
          />
          <TextField
            lable="Name"
            required
            type="text"
            name="productName"
            id="productName"
            placeholder="Name"
          />
          <TextField
            lable="QTY"
            type="number"
            required
            name="quantity"
            id="quantity"
            placeholder="Quantity"
          />
        </FormGrid>
        <TextAreaContainer>
          <Paragraph color="#162427">Product Description</Paragraph>
          <Paragraph
            color="#686868"
            style={{ fontSize: "0.9rem", fontWeight: "400" }}
          >
            A small description about the product
          </Paragraph>
          <TextArea
            placeholder="Type..."
            name="productDescription"
            required
            type="text"
            id="productDescription"
          ></TextArea>
        </TextAreaContainer>
      </FormContainer>

      <ImageFlexContainer>
        <FlexColumnContainer>
          <Paragraph color="#162427">Product Images</Paragraph>
          <Paragraph
            color="#686868"
            style={{
              fontSize: "0.9rem",
              fontWeight: "400",
            }}
          >
            JPEG, PNG, SVG or GIF (Maximum file size 50MB)
          </Paragraph>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <ImageFileUpload
            setFiles={setImages}
            id="dropzone"
            multiple="3"
            maxSize="500000"
            type="image/*, image/jpeg, image/png"
          />
          <FlexContainer>
            {images?.map((item, key) => {
              return (
                <ImageBox
                  item={item}
                  key={key}
                  index={key}
                  setImages={setImages}
                  images={images}
                />
              );
            })}
          </FlexContainer>
        </FlexColumnContainer>
      </ImageFlexContainer>
      <FlexEndContainer>
        <Button
          form="addProductForm"
          label="Add Product"
          type="submit"
          disabbled={loading}
          startIcon={
            loading && (
              <CircularProgress
                style={{
                  color: "#fff",
                }}
                size={15}
              />
            )
          }
        />
      </FlexEndContainer>
    </Container>
  );
};

export default AddNewProduct;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const FormContainer = styled.form`
  display: flex;
  margin: 2rem 0rem;
  flex-direction: column;
  gap: 3rem;
`;

export const FormGrid = styled.div`
  display: grid;
  place-items: flex-end normal;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    place-items: unset;
    display: flex;
    flex-direction: column;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  cursor: auto;
  outline: none;
  background-color: #f7f7f7;
  resize: vertical;
  padding: 0.7rem 2rem;
  border-radius: 10px;
  min-height: 5rem;
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  line-height: 1.2rem;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export const FlexEndContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: flex-end;
`;

export const ImageFlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
