import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "../types";
const initialState: IinitialState = {
  name: "",
  id: "",
  transactions: [],
};

const customReducer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<IinitialState>) {
      const obj = action.payload;
      (state.id = obj.id),
        (state.name = obj.name),
        (state.transactions = obj.transactions);
    },
  },
});

export default customReducer.reducer;
export const { setId } = customReducer.actions;
