import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hook";
import { IinitialState } from "../types";

interface Istyleprop {
  types: string;
}

function Customer({ val }: { val?: string }) {
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
      <TitleDiv>
        <b>Name</b>
        <AmountTitle>Total</AmountTitle>
      </TitleDiv>
      {!obj.name && <NotSel>Customer not selected</NotSel>}
      <h1>{obj?.name}</h1>
      <TitleDiv>
        <b>ENTRIES </b>
        <AmountTitle>YOU GOT </AmountTitle>
        <AmountTitle>YOU GAVE</AmountTitle>
      </TitleDiv>
      {info()}
    </Div>
  );
}

export default Customer;

const NotSel = styled.b`
  justify-content: center;
  align-text: center;
  text-align: center;
`;
const TitleDiv = styled.div`
  border: solid 2px black;
  margin: 1px;
  padding: 10px 10px;
  border-radius: 15px;
  color: black;
  background-color: lightgray;
`;

const Entrie = styled.div`
  padding: 15px 1px;
  margin: 5px;
`;

const AmountTitle = styled.b`
  float: right;
  padding: 0px 15px;
`;

const Div = styled.div`
  width: 500px;
  height: 600px;
  justify-content: center;
  align-item: center;
  margin: 10px 400px;
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
