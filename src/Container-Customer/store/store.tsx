import { configureStore } from "@reduxjs/toolkit";
import reducer from "./customers-api-slice";
import customRedu from "./transaction-slice";
import lookupReducer from "./lookup-slice";
import flyoutReducer from './flyout-slices';

const store = configureStore({
  reducer: {
    customer: reducer,
    transactions: customRedu,
    lookups: lookupReducer,
    flyout: flyoutReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
