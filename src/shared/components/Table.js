import React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import TableRow, { TableRowContainer } from "../../components/TableRow";

const Table = ({ headerData, tableRowData, setTableRowData }) => {
  return (
    <Container>
      {/* Header */}
      <TableRowContainer>
        {headerData?.map((item, index) => {
          return (
            <Paragraph
              style={{ textTransform: "uppercase" }}
              color="#001EB9"
              key={index}
              minWidth="5rem"
            >
              {item}
            </Paragraph>
          );
        })}
      </TableRowContainer>

      {/* Table Data */}
      {tableRowData?.map((item, index) => {
        return (
          <TableRow
            item={item}
            key={index}
            tableRowData={tableRowData}
            index={index}
            setTableRowData={setTableRowData}
          />
        );
      })}
    </Container>
  );
};

export default Table;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  gap: 1rem;
  margin-bottom: 3rem;
`;
