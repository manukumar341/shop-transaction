import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hook";
import { IinitialState } from "../types";

interface Istyleprop {
  types: string;
}

function Customer() {
  const obj = useAppSelector((state) => state.customState);
  console.log(obj);
  const info = () => {
    const arr = obj.transactions.map((element) => {
      console.log("element");
      let got, give;
      if (element.type === "got") {
        got = element.amount;
        give = "-";
      } else {
        give = element.amount;
        got = "-";
      }
      return (
        <Entrie>
          <b>{element.date}</b> <Got>{got}</Got> <Give>{give}</Give>
        </Entrie>
      );
    });
    return arr;
  };

  return (
    <Div>
      <h1>{obj?.name}</h1>
      <b>ENTRIES </b>
      <AmountTitle>YOU GOT </AmountTitle>
      <AmountTitle>YOU GAVE</AmountTitle>

      {info()}
    </Div>
  );
}

export default Customer;

const Entrie = styled.div`
  padding: 15px 1px;
  margin: 5px;
  background-color: lightgray;
`;

const AmountTitle = styled.b`
  float: right;
  padding: 0px 15px;
`;

const Div = styled.div`
  width: 500px;
  height: 600px;
  border: solid 1px black;
  justify-content: center;
  align-item: center;
  display: flex-box;
  margin: 10px 50px;
  float: right;
`;

const Got = styled.b`
  color: green;
  float: right;
  padding: 0px 35px;
`;

const Give = styled.b`
  color: red;
  float: right;
  padding: 0px 35px;
`;
