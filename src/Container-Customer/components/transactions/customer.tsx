import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import AddNewEntry from "./add-new-entry";
import {
  TitleDiv,
  AmountTitle,
  Div,
  Entrie,
  Give,
  Got,
  NotSel,
  GotGiveBtn,
} from "./style";

interface Istyleprop {
  types: string;
}

function Customer() {
  const obj = useAppSelector((state) => state.customState);
  const dispatch = useAppDispatch();
const [newEntry,setNewEntry]=useState(false)
let  amount: number = 0,date: string = "";
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
      {obj.name && (
        <>
        <AddNewEntry amount={amount} date={date}/>
          <GotGiveBtn btn="got" name='YouGot'>You Got</GotGiveBtn>
          <GotGiveBtn btn="give" name='YouGive'>You Give</GotGiveBtn>
        </>
      )}
    </Div>
  );
}

export default React.memo(Customer);
