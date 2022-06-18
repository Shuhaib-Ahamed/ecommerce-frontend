import React, { useState } from "react";
import { addFav, isFav } from "../utils/AddFav";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CircularProgress, IconButton } from "@mui/material";
import { Paragraph } from "../shared/Typography";
import { useHistory } from "react-router-dom";
import FavSwitch from "../shared/components/FavSwitch";
import { deleteProductById } from "../api/api";

const TableRow = ({ item, tableRowData, setTableRowData }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  //Delete Product
  const handleDelete = async (id) => {
    setLoading(true);
    const productIndex = tableRowData.findIndex((x) => x._id === id);
    const productArr = [...tableRowData];
    const localStorageArr = JSON.parse(localStorage.favItems);
    const localIndex = localStorageArr.findIndex((x) => x._id === id);

    try {
      const response = await deleteProductById({
        id: id,
        token: `Bearer ${localStorage.token}`,
      });
      if (response.status === 200) {
        productArr.splice(productIndex, 1);
        setTableRowData(productArr);
        if (localStorageArr) {
          localStorageArr.splice(localIndex, 1);
          localStorage.setItem("favItems", JSON.stringify(localStorageArr));
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TableRowContainer>
      <Paragraph
        minWidth="4rem"
        color="
      #162427a2"
      >
        {item?.sku}
      </Paragraph>
      <ImageWrapper>
        <Image
          src={
            "data:image/jpeg;base64,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"
          }
          alt={item?.productName}
        />
      </ImageWrapper>
      <Paragraph
        minWidth="4rem"
        color="
      #162427"
      >
        {item?.productName}
      </Paragraph>
      <Paragraph
        minWidth="4rem"
        color="
      #162427"
      >
        {`$ ${item?.price}`}
      </Paragraph>
      <ButtonContainer>
        <IconButton disabled={loading} onClick={() => handleDelete(item?._id)}>
          {loading ? (
            <CircularProgress
              style={{
                color: "#001EB9",
              }}
              size={20}
            />
          ) : (
            <DeleteIcon
              style={{
                color: "#001EB9",
              }}
            />
          )}
        </IconButton>
        <IconButton>
          <EditIcon
            style={{
              color: "#001EB9",
            }}
          />
        </IconButton>
        <IconButton onClick={() => addFav(item?._id, tableRowData, history)}>
          <FavSwitch isFav={isFav(item._id)} />
        </IconButton>
      </ButtonContainer>
    </TableRowContainer>
  );
};

export default TableRow;

export const TableRowContainer = styled.div`
  &:first-child {
    border-top: unset !important;
    padding: 0.5rem 1rem !important;
  }
  &:nth-child(2) {
    border-top: unset !important;

    padding: 0.5rem 1rem !important;
  }
  border-top: 1px solid #16242722;
  padding: 1.5rem 1rem 0.5rem 1rem;

  grid-template-columns: 1fr 1fr 2fr 1fr 2fr;
  gap: 1rem;
  display: grid;
`;

const TableData = styled.div``;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  gap: 1rem;
`;
