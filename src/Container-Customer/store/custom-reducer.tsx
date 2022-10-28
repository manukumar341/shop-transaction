import { createSlice } from "@reduxjs/toolkit"

const initialState={
    id:''
}


export const customReducer=createSlice({
name:'customer',
initialState,
reducers:{
setId(state,action){
    state.id=action.payload
}
}
})

