import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import {IinitialState,Ipayload,Ifetch} from '../types'

type dataType=Ipayload

 export const initialState:Ifetch={
    loading:false,
    data:[],
    error:''
}

export const fetchUsers=createAsyncThunk('user/fetchUsers',async ()=>{
    const response = await axios
        .get('https://63286b779a053ff9aab77614.mockapi.io/khata')
        
    return response.data
})

const customerReducer=createSlice({
    name: 'customers',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IinitialState[]>) => {
            console.log(action.payload)
            state.loading = false,
                state.data = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
                state.data = [],
                state.error = action.error.message || 'Something went wrong'
        })
    },
    reducers: {}
})

export default customerReducer.reducer