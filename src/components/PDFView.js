import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import styled from "styled-components";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFView = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const pdfUrl = "https://decentraland.org/whitepaper.pdf";

  return (
    <Container>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js">
        <Viewer
          theme="dark"
          plugins={[defaultLayoutPluginInstance]}
          fileUrl={pdfUrl}
          defaultScale={1.5}
        />
      </Worker>
    </Container>
  );
};

export default PDFView;

const Container = styled.div`
  height: 90vh;
  width: 50vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
  /* height: 80vh;
  width: 100%;
  margin: 1rem;
  padding: 1.5rem; */
`;
