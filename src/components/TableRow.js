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
            "https://ipfs.infura.io/ipfs/QmXEgdq85Dfs1nj1DhaBi4BUTGweyNxGxenUPYJpnidSsw"
          }
          alt={item?.productName}
        />
      </ImageWrapper>
      <Paragraph
        minWidth="6rem"
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
        <IconButton
          onClick={() => {
            history.push({
              pathname: "/edit-product",
              state: item,
            });
          }}
        >
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

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
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
