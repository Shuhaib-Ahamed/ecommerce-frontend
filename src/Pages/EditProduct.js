import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/ProductView";
import { Heading, Paragraph, SubHeading } from "../shared/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "../shared/components/Button";
import {
  FlexColumnContainer,
  FlexEndContainer,
  FormContainer,
  FormGrid,
  ImageFlexContainer,
  TextArea,
  TextAreaContainer,
} from "./AddNewProduct";
import TextField from "../shared/components/TextField";
import ImageFileUpload from "../components/ImageFileUpload";
import ImageBox from "../shared/components/ImageBox";
import { AddImageToIPFS } from "../utils/IPFSService";
import { editProductById } from "../api/api";
import { CircularProgress } from "@mui/material";

const EditProduct = () => {
  const location = useLocation();
  const [images, setImages] = useState(location?.state?.images);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

    if (images.length > 0) {
      setLoading(true);
      let imageArr = [];
      var productObject = getFormDataById("editProductForm");
      if (images[0].path) {
        for (let i = 0; i < images?.length; i++) {
          const ipfsData = await AddImageToIPFS(images && images[i]);
          const previewImageUrl = `https://ipfs.infura.io/ipfs/${ipfsData?.ipfsHash}`;
          imageArr.push(previewImageUrl);
        }
        productObject.images = imageArr;
      } else {
        productObject.images = images;
      }

      try {
        if (JSON.stringify(location?.state) != JSON.stringify(productObject)) {
          const response = await editProductById({
            id: location?.state?._id,
            body: productObject,
            token: `Bearer ${localStorage?.token}`,
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
    }
  };
  if (location?.state) {
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
          <SubHeading color="#1f3bc4">Edit product</SubHeading>
        </FlexContainer>{" "}
        <FormContainer
          id="editProductForm"
          name="editProductForm"
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
              defaultValue={location?.state?.sku}
            />
            <TextField
              lable="Price"
              type="number"
              required
              name="price"
              id="price"
              placeholder="Price"
              defaultValue={location?.state?.price}
            />
            <TextField
              lable="Name"
              required
              type="text"
              name="productName"
              id="productName"
              placeholder="Name"
              defaultValue={location?.state?.productName}
            />
            <TextField
              lable="QTY"
              type="number"
              required
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              defaultValue={location?.state?.quantity}
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
              defaultValue={location?.state?.productDescription}
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
            form="editProductForm"
            label="Edit Product"
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
  } else {
    return (
      <Container>
        <FlexContainer>
          <NavLink to="/">
            <Heading color="#162427">Back</Heading>
          </NavLink>{" "}
          <SubHeading color="#1f3bc4">Wrong Route</SubHeading>
        </FlexContainer>{" "}
      </Container>
    );
  }
};

export default EditProduct;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
