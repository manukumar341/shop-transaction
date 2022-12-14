import React, { useContext } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { useAppDispatch } from "../store/hook";
import { setLookupValue } from "../store/lookup-slice";
import { IhandlerFunc } from "../types";
import { Div } from "./export-component";

function Filterby(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleFilter = (e: EventTarget & HTMLSelectElement) => {
    dispatch(setLookupValue({ type: "filter", payload: e.value }));
  };
  return (
    <Div>
      <h4>Filter By</h4>
      <Select id="sort" onChange={(e) => handleFilter(e.target)}>
        <option value="All" selected>
          All
        </option>
        <option value="You'll Get">You'll Get</option>
        <option value="You'll Give">You'll Give</option>
        <option value="Settled">Settled</option>
      </Select>
    </Div>
  );
}

export default Filterby;

const Select = styled.select`
  border: gray 1px solid;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: -100px;
`;
