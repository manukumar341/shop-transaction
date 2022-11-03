import React, { useEffect, useState } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/api-slice";
import { setId } from "./store/custom-slice";
import Customers from "./components/customers/customers";
import Customer from "./components/transactions/customer";
import styled from "styled-components";
import NewCustomer from "./components/new-customer/new-customer";

export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const [newCustomer, setNewCustomer] = useState(false);
  const store = useAppSelector((state) => state);
  const { data } = store.customer;

  const dispatch = useAppDispatch();
  const handleOnclickCustomer = (id: string) => {
    newCustomer && handleNewCustomer();
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
    setNewCustomer(!newCustomer);
  };

  return (
    <Div>
      <Customers
        handleOnclickCustomer={handleOnclickCustomer}
        handleNewCustomer={handleNewCustomer}
      />
      {newCustomer ? (
        <NewCustomer handleNewCustomer={handleNewCustomer} />
      ) : (
        <Customer />
      )}
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
