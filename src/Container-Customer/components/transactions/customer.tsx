import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { showSaveTransactionComp } from "../../store/flyout-slices";
import Flyout from "../flyout";
import AddNewEntry from "./add-new-entry";
import { TitleDiv, AmountTitle, Div, Entrie, Give, Got, NotSel, GotGiveBtn, } from "./style";
import TransactionInfo from "./transaction-info";

interface Istyleprop {
  types: string;
}

function Customer() {
  const store = useAppSelector((state) => state);
  const toggle = store.flyout.saveTransaction
  const obj = store.transactions;
  const dispatch = useAppDispatch();

  let amount: number = 0, date: string = "";

  const handleGotGiveBtn = (e: React.MouseEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).value
    dispatch(showSaveTransactionComp({ type: value }))
    // setNewEntry(!newEntry);
    // date&&dispatch(addTransaction({name:obj.name,transaction:{type:value,date:date,amount:amount}}));

  }

  return (
    <Div>
      <Flyout />
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

      {obj.name && (
        <>
          <TransactionInfo obj={obj} />
          <GotGiveBtn btn="got" value='YouGot' onClick={handleGotGiveBtn}>You Got</GotGiveBtn>
          <GotGiveBtn btn="give" value='YouGive' onClick={handleGotGiveBtn}>You Give</GotGiveBtn>
        </>
      )}

    </Div>
  );
}

export default React.memo(Customer);
