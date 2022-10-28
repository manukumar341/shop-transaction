import React, { useState } from "react";
import styled from "styled-components";
import Search from "../lookup-component/search";
import { IinitialState, Iprop } from "../types";
interface IstyleProp {
  total: number | string;
}

interface ICustomers {
  arrCustomOverview: Array<Iprop>;
  handleOnclickCustomer(id: string): void;
}
export const searchContext = React.createContext<string>("");
export const Customers = (props: ICustomers) => {
  const [text, setText] = useState("");

  const { arrCustomOverview, handleOnclickCustomer } = props;

  return (
    <>
      <Container>
        <Title>
          <b>Name</b>
          <Amount total={""}>Total</Amount>
        </Title>
        {arrCustomOverview.map((element, index) => (
          <CustomerInfo
            key={index}
            id={element.name}
            onClick={() => handleOnclickCustomer(element.name)}
          >
            <b>{element.name}</b>
            <Amount total={element.total}>{element.total}</Amount>
          </CustomerInfo>
        ))}
      </Container>
    </>
  );
};

const Title = styled.div`
  border: none;
  margin: 1px;
  padding: 10px 10px;
  color: gray;
`;

const Container = styled.div`
  width: 500px;
  height: 600px;
  border: solid 1px red;
  margin: 10px 50px;
  position: absolute;
  display: inline-block;
`;

const CustomerInfo = styled.div`
  background-color: white;
  border: none;
  margin: 1px;
  padding: 20px 10px;
  &:hover {
    margin: 3px;
    background-color: lightgray;
  }
`;

const Amount = styled.b<IstyleProp>`
  float: right;
  color: ${(props) =>
    props.total > 0 ? "green" : props.total < 0 ? "red" : "gray"};
`;
const Name = styled.h2`
  float: left;
  text-aline: left;
`;
