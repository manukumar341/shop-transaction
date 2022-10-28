import React, { useContext } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { IhandlerFunc } from "../types";
import { Div } from "./export-component";
function Sortby(): JSX.Element {
  // const {handleSort}=React.useContext(context) as IhandlerFunc
  // const obj=useContext(context)  <select id="sort" onChange={e=>obj?.handleSort(e.target)}>
  const { handleSort } = useContext(context) as IhandlerFunc;

  return (
    <Div>
      <h4>Sort By</h4>
      <Select id="sort" onChange={(e) => handleSort(e.target)}>
        <option value="Sort by" selected>
          By Name
        </option>
        <option value="high-low">Highest Amount</option>
        <option value="low-high">Least Amount</option>
      </Select>
    </Div>
  );
}

export default Sortby;

const Select = styled.select`
  border: gray 1px solid;
  margin-top: -90px;

  outline: none;
  border-radius: 5px;
  padding: 10px;
`;
