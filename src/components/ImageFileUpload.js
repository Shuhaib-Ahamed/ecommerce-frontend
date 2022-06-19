import React, { useState } from "react";
import styled from "styled-components";
import Button from "../shared/components/Button";
import { Paragraph } from "../shared/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { CircularProgress } from "@mui/material";
import DropzoneComponent from "../shared/components/DropZone";

const ImageFileUpload = (props) => {
  //   const [loading, setLoading] = useState(false);
  //   const [status, setStatus] = useState(false);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       setLoading(true);
  //       setStatus(false);
  //       let formData = new FormData(e);
  //       console.log(formData);
  //       formData.append("file", images[0].data);
  //       const response = await fetch("http://localhost:8000/api/upload/image", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response === 200) {
  //         setStatus(true);
  //       }
  //     } catch (error) {
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <Container
    //   onSubmit={handleSubmit}
    //   id="image-uploader"
    //   name="image-uploader"
    >
      <DropzoneComponent {...props} />
      {/* <ImageInput
        type="file"
        name="file-uploader"
        id="file-uploader"
        required
        accept="image/*"
        placeholder="Add Images"
        multiple={false}
        onChange={readURL}
      /> */}

      {/* <Button
        style={{
          margin: "0.5rem 1rem",
        }}
        form="image-uploader"
        type="submit"
        bordered
        startIcon={
          status ? (
            <CloudDoneIcon style={{ color: "#25cd19" }} />
          ) : loading ? (
            <CircularProgress
              style={{
                color: "#1f3bc4",
              }}
              size={20}
            />
          ) : (
            <CloudUploadIcon style={{ color: "#1f3bc4" }} />
          )
        }
      /> */}
    </Container>
  );
};

export default ImageFileUpload;

const Container = styled.form`
  position: relative;
`;

const ImageInput = styled.input`
  color: #1f3bc4;
  border: none;
  opacity: 0;
  text-decoration: underline;
  cursor: auto;
  /* opacity: 0; */
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  line-height: 1.2rem;
`;
