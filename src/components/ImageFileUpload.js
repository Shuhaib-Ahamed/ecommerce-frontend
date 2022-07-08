import styled from "styled-components";
import DropzoneComponent from "../shared/components/DropZone";

const ImageFileUpload = (props) => {
  return (
    <Container>
      <DropzoneComponent {...props} />
    </Container>
  );
};

export default ImageFileUpload;

const Container = styled.form`
  position: relative;
`;
