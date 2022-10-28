import { configureStore } from "@reduxjs/toolkit";
import reducer from "./api-reducer";
import customRedu from "./custom-reducer";

const store = configureStore({
  reducer: {
    customer: reducer,
    customState: customRedu,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
