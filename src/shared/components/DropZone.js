import React, { useEffect } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { Paragraph } from "../Typography";

const DropzoneComponent = ({
  setErrors,
  setFiles,
  files,
  maxFiles,
  maxSize,
  multiple,
  minSize,
  type,
  form,
  disabled,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: type,
    maxFiles: maxFiles,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
    onDrop: (acceptedFiles, rejectedFiles) => {
      setFiles([]);
      rejectedFiles.forEach((fileCheck) => {
        fileCheck.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            setErrors(` Error: File is larger than 1 MB`);
          } else if (err.code === "file-invalid-type") {
            setErrors(` Error: File should be an image`);
          }
        });
      });
      if (rejectedFiles.length === 0) {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      if (files?.length > 0) {
        files?.forEach((file) => URL.revokeObjectURL(file?.preview));
      }
    },
    [files]
  );

  return (
    <DroppableContainer>
      <InnerContainer {...getRootProps()}>
        {!disabled && <input form={form} required {...getInputProps()} />}
        <Paragraph
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          color="#1f3bc4"
        >
          Add Images
        </Paragraph>
      </InnerContainer>
    </DroppableContainer>
  );
};

export default DropzoneComponent;

export const DroppableContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

export const InnerContainer = styled.div`
  width: 6rem;
  height: 2rem;
`;
