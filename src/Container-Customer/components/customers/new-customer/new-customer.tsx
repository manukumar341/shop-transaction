import React, { ChangeEventHandler, useRef } from "react";
import { addCustomer } from "../../../store/customers-api-slice";
import { useAppDispatch } from "../../../store/hook";
import { showAddCustomerComp } from "../../../store/flyout-slices";
import { Div, GotGiveBtn } from "./style";
function NewCustomer() {
  const first = useRef(focus)
  console.log(first)
  const dispatch = useAppDispatch();
  let name: string = "",
    amount: number = 0,
    date: string = "";

  const handleOnchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    name = e.target.value;
  };
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    amount = parseInt(e.target.value);
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    date = e.target.value;
  };
  const handleGiveGotBtn = (e: React.MouseEvent<HTMLElement>) => {
    const type = (e.target as HTMLInputElement).value;
    dispatch(showAddCustomerComp())
    dispatch(
      addCustomer({
        name: name,
        id: Date.now().toString(),
        transactions: [
          {
            amount: amount,
            date: date,
            type: type,
          },
        ],
      })
    );
  };

  return (
    <Div>
      <h1>Add New Customer</h1>
      <h3>Customer Name</h3>
      <input
        type="text"
        placeholder="eg. Raj"
        onChange={handleOnchangeName}
        required
      />
      <h3>Amount</h3>
      <input type="number" placeholder="1999" onChange={handleAmount} />
      <h4>Date</h4>
      <input type="date" onChange={handleDate} />
      <div>
        <GotGiveBtn btn="got" value="got" name='got' onClick={handleGiveGotBtn}>
          You Got
        </GotGiveBtn>
        <GotGiveBtn btn="give" value="give" name='give' onClick={handleGiveGotBtn}>
          You Give
        </GotGiveBtn>
      </div>
    </Div>
  );
}

export default NewCustomer;
