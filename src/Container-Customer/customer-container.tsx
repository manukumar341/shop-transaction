import React, { useEffect } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import Components from "./lookup-component/components";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/api-reducer";
import { setId } from "./store/custom-reducer";
import { Customers } from "./components/customers";
import { customOverview } from "./logic";
import Customer from "./components/customer";
import Search from "./lookup-component/search";
import styled from "styled-components";

export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const { data, error, loading } = useAppSelector((state) => state.customer);
  const obj = useAppSelector((state) => state.customState);

  const dispatch = useAppDispatch();
  const handler: IhandlerFunc = {
    handleSearch: (e: EventTarget & HTMLInputElement) => {
      console.log(e.value);
    },
    handleSort: (event: EventTarget & HTMLSelectElement) => {
      console.log(event.value);
    },
    handleFilter: (event: EventTarget & HTMLSelectElement) => {
      console.log(event.value);
    },
  };

  const handleOnclickCustomer = (id: string) => {
    console.log(id);
    data.map((elem) => {
      if (elem.name === id) {
        dispatch(setId(elem));
      }
    });
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const arrCustomOverview = customOverview(data);

  return (
    <Div>
      <context.Provider value={handler}>
        <Components />
      </context.Provider>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error...</div>}
      {!loading && data.length && (
        <Customers
          handleOnclickCustomer={handleOnclickCustomer}
          arrCustomOverview={arrCustomOverview}
        />
      )}
      <Customer />
    </Div>
  );
};

const Div = styled.div`
  display: fiex-box;
`;
