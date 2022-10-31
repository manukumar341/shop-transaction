import { configureStore } from "@reduxjs/toolkit";
import reducer from "./api-slice";
import customRedu from "./custom-slice";
import lookupReducer from "./lookup-slice";

const store = configureStore({
  reducer: {
    customer: reducer,
    customState: customRedu,
    lookups: lookupReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
