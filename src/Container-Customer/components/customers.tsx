import { useContext, useState } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { customOverview } from "../logic";
import { useAppSelector } from "../store/hook";
import { IhandlerFunc, Iprop } from "../types";
import CustomersInfo from "./customers-info";
interface IstyleProp {
  total: number | string;
}

export interface ICustomers {
  // arrCustomOverview: Array<Iprop>;
  handleOnclickCustomer(id: string): void;
}

export const Customers = (props: ICustomers) => {
  const { handleOnclickCustomer } = props;
  const store = useAppSelector((state) => state);
  const { data } = store.customer;
  const { searchValue } = useAppSelector((state) => state.lookups);
  const arr = data,
    value = searchValue;
  console.log(searchValue);

  const arrCustomOverview = customOverview(arr, searchValue);

  let give = 0,
    got = 0;
  arrCustomOverview.map((element) => {
    const total = element.total;
    if (total > 0) {
      got += total;
    } else {
      give += total;
    }
  });

  return (
    <>
      <Container>
        <div>
          <b>total give : {give} </b>
          <b>total got : {got}</b>
          <b>net total : {got - -give}</b>
        </div>
        <TitleDiv>
          <b>Name</b>
          <Amount total={""}>Total</Amount>
        </TitleDiv>
        <CustomersInfo
          arr={arrCustomOverview}
          handleOnclickCustomer={handleOnclickCustomer}
        />
      </Container>
    </>
  );
};

const TitleDiv = styled.div`
  border: solid 2px black;
  margin: 1px;
  padding: 10px 10px;
  border-radius: 15px;
  color: black;
  background-color: lightgray;
`;

const Container = styled.div`
  width: 500px;
  height: 600px;
  margin: 10px 50px;
  position: absolute;
`;

const Amount = styled.b<IstyleProp>`
  float: right;
  color: ${(props) =>
    props.total > 0 ? "green" : props.total < 0 ? "red" : "black"};
`;
