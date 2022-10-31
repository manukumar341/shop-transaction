import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  filterValue: "",
  sortValue: "",
};

const lookupSlice = createSlice({
  name: "lookup",
  initialState,
  reducers: {
    setLookupValue(state, action) {
      const actions = action.payload;
      if (actions.type === "sort") {
        const states = { ...state, sortValue: actions.payload };
        state = states;
      }
      if (actions.type === "filter") {
        const states = {
          ...state,
          filterValue: actions.payload,
        };
        state = states;
        console.log(state);
      }
      if (actions.type === "search") {
        const states = {
          ...state,
          searchValue: actions.payload,
        };
        state = states;
      }
    },
  },
});

export default lookupSlice.reducer;
export const { setLookupValue } = lookupSlice.actions;
