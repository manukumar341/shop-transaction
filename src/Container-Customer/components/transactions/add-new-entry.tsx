import React from "react";
import { addTransaction } from "../../store/customers-api-slice";
import styled from "styled-components";
import { GotGiveBtn } from "./style";
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { showAddCustomerComp, showSaveTransactionComp } from "../../store/flyout-slices";

function AddNewEntry() {
  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state);
  const name = store.transactions.name;
  const type = store.flyout.saveTransaction;
  let amount = 0, date = '';

  const handleSaveBtn = () => {
    dispatch(showSaveTransactionComp({ type: '' }))
    dispatch(addTransaction({ date: date, amount: amount, type: type }));
  }
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    amount = parseInt(e.target.value);
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    date = e.target.value;
  };
  return (
    <>
      <h1>{name}</h1>
      <label>Customer Name</label>
      <input type="number" onChange={handleAmount} />
      <label>Date</label>
      <input type='date' onChange={handleDate} />
      <GotGiveBtn value='save' onClick={handleSaveBtn}>Save</GotGiveBtn>
    </>
  );
}

export default AddNewEntry;
