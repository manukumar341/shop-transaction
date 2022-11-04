import React, { useEffect, useState } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/customers-api-slice";
import { setId } from "./store/transaction-slice";
import Customers from "./components/customers/customers";
import Customer from "./components/transactions/customer";
import styled from "styled-components";
import NewCustomer from "./components/new-customer/new-customer";
import Flyout from "./components/flyout";
import { showAddCustomerComp } from "./store/flyout-slices";

export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const store = useAppSelector((state) => state);
  const { data } = store.customer;
  const { addCustomer } = store.flyout;
  const dispatch = useAppDispatch();
  const handleOnclickCustomer = (id: string) => {
    addCustomer && handleNewCustomer();
    data.map((elem) => {
      if (elem.name === id) {
        dispatch(setId(elem));
      }
    });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleNewCustomer = () => {
    dispatch(showAddCustomerComp())
  };

  return (
    <Div>
      <Customers
        handleOnclickCustomer={handleOnclickCustomer}
        handleNewCustomer={handleNewCustomer}
      />
      <Customer />
    </Div>
  );
};

const Div = styled.div`
  display: block;
`;
const AddBtn = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: red;
  background-color: lightgreen;
`;
