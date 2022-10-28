import { configureStore } from '@reduxjs/toolkit'
import reducer from './api-reducer'

const store = configureStore({
  reducer: {
    customer:reducer
  }
})

console.log(store.getState());

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


