import React, { useEffect } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/api-slice";
import { setId } from "./store/custom-slice";
import Customers from "./components/customers/customers";
import Customer from "./components/transactions/customer";
import styled from "styled-components";

export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const store = useAppSelector((state) => state);
  const { data } = store.customer;

  const dispatch = useAppDispatch();
  const handleOnclickCustomer = (id: string) => {
    data.map((elem) => {
      if (elem.name === id) {
        dispatch(setId(elem));
      }
    });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Div>
      <Customers handleOnclickCustomer={handleOnclickCustomer} />
      <Customer />
    </Div>
  );
};

const Div = styled.div`
  display: flex-box;
`;
const AddBtn = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: red;
  background-color: lightgreen;
`;
