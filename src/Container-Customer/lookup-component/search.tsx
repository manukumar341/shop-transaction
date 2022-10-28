import React, { useContext } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { IhandlerFunc } from "../types";
import { Div } from "./export-component";
import { searchContext } from "../components/customers";

function Search(): JSX.Element {
  const { handleSearch } = useContext(context) as IhandlerFunc;
  const { searchContext } = useContext(searchContext) as string;
  return (
    <Div>
      <h4>Search for Customers</h4>
      <Input
        type="text"
        placeholder="Search by Name...."
        onChange={(e) => handleSearch(e.target)}
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
