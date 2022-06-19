import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";
import { Paragraph, SubHeading } from "../shared/Typography";
import { ButtonContainer } from "./ProductView";
import Button from "../shared/components/Button";

const ModalComponent = ({ setModalOpen, openModal, message, handleAction }) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={openModal}
      onClose={() => {
        setModalOpen(false);
      }}
    >
      <ModalContainer>
        <ErrorIcon style={{ color: "#ef1a1a" }} sx={{ fontSize: 50 }} />
        <SubHeading style={{ textTransform: "uppercase" }} color="#162427">
          Are You Sure?
        </SubHeading>
        <Paragraph color="#3e3e3e">{message}</Paragraph>
        <ButtonContainer style={{ margin: "2.3rem 0rem" }}>
          <Button
            label="Delete"
            onClick={() => {
              handleAction();
              setModalOpen(false);
            }}
          />
          <Button
            style={{ padding: "0.73rem 2rem" }}
            onClick={() => {
              setModalOpen(false);
            }}
            bordered
            label="Cancel"
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  outline: none;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 28rem;
  z-index: 999;
  height: 15rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-shadow: -1px 1px 52px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 52px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 52px -22px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
