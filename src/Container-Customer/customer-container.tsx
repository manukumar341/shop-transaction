import React, { useEffect } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import Components from "./lookup-component/components";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/api-slice";
import { setId } from "./store/custom-slice";
import { Customers } from "./components/customers";
import Customer from "./components/customer";
import styled from "styled-components";

// export const context = React.createContext<IhandlerFunc | null>(null);
export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const store = useAppSelector((state) => state);
  const { data, error, loading } = store.customer;
  const { filterValue, searchValue, sortValue } = store.lookups;
  const obj = useAppSelector((state) => state.customState);

  const dispatch = useAppDispatch();
  const handleOnclickCustomer = (id: string) => {
    data.map((elem) => {
      if (elem.name === id) {
        dispatch(setId(elem));
      }
    });
  };
  // const handler: IhandlerFunc = {
  //   handleOnclickCustomer: (id: string) => {
  //     data.map((elem) => {
  //       if (elem.name === id) {
  //         dispatch(setId(elem));
  //       }
  //     });
  //   },
  // };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Div>
      <Components />
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error...</div>}
      {!loading && data.length && (
        <Customers handleOnclickCustomer={handleOnclickCustomer} />
      )}
      <AddBtn>
        <b>Add Customer</b>
      </AddBtn>
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
