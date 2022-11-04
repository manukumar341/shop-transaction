import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IinitialState, Ifetch } from "../types";

export const initialState: Ifetch = {
  loading: false,
  data: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://63286b779a053ff9aab77614.mockapi.io/khata"
  );

  return response.data;
});

const customerReducer = createSlice({
  name: "customers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IinitialState[]>) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = "");
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.data = []),
        (state.error = action.error.message || "Something went wrong");
    });
  },
  reducers: {
    addCustomer(state, action) {
      state.data.push(action.payload);
    },
    addTransaction(state, action) {
      const payload = action.payload

      state.data.map((obj, index) => {
        if (obj.name === payload.name) {
          state.data[index].transactions.push(payload.transaction)
        }
      })
    }
  },
});

export default customerReducer.reducer;
export const { addCustomer, addTransaction } = customerReducer.actions;
