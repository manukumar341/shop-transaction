import React, { useContext } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { IhandlerFunc } from "../types";
import { Div } from "./export-component";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setLookupValue } from "../store/lookup-slice";

function Search(): JSX.Element {
  const dispatch = useAppDispatch();

  const onchangeSearchHandler = (e: EventTarget & HTMLInputElement) => {
    let value = e.value;
    dispatch(setLookupValue({ type: "search", payload: value }));
  };

  return (
    <Div>
      <h4>Search for Customers</h4>
      <Input
        type="text"
        placeholder="Search by Name...."
        onChange={(e) => onchangeSearchHandler(e.target)}
      />
    </Div>
  );
}

export default Search;

const Input = styled.input`
  margin-top: -90px;
  border: gray 1px solid;
  outline: none;
  border-radius: 5px;
  padding: 10px;
`;
