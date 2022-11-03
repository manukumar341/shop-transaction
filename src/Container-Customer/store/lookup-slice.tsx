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
        state.sortValue = actions.payload;
      }
      if (actions.type === "filter") {
        state.filterValue = actions.payload;
      }
      if (actions.type === "search") {
        state.searchValue = actions.payload;
      }
    },
  },
});

export default lookupSlice.reducer;
export const { setLookupValue } = lookupSlice.actions;
