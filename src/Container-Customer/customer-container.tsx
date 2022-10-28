import React, { useEffect } from "react";
import { IhandlerFunc, IinitialState } from "./types";
import Components from "./lookup-component/components";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchUsers } from "./store/api-reducer";
import { Customers } from "./components/customers";
import { customOverview } from "./logic";

export const context = React.createContext<IhandlerFunc | null>(null);

export const CustomerContainer = () => {
  const { data, error, loading } = useAppSelector((state) => state.customer);
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
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const arrCustomOverview = customOverview(data);

  const obj: IinitialState = {
    name: "djkas",
    id: "sajdk",
    transactions: [{ date: "sdf", amount: 34, type: "give" }],
  };
  return (
    <>
      <context.Provider value={handler}>
        <Components />
      </context.Provider>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error...</div>}
      {!loading && data.length && (
        <Customers
          handleOnclickCustomer={handleOnclickCustomer}
          arrCustomOverview=[{}]
        />
      )}
      {/* <Customer obj={obj}/> */}
    </>
  );
};
