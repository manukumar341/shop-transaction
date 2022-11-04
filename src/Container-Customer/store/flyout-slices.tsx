import { createSlice } from "@reduxjs/toolkit";

interface IinitialProp {
    addCustomer: boolean,
    saveTransaction: string,
}

const initialState: IinitialProp = {
    addCustomer: false,
    saveTransaction: '',
}

const flyoutSlice = createSlice({
    name: 'flyout',
    initialState,
    reducers: {
        addCustomer(state) {
            let addCustomer = state.addCustomer;
            state.addCustomer = !addCustomer;
            console.log(addCustomer)
        },
        saveTransaction(state, action) {
            console.log(action)
            state.saveTransaction = action.payload.type
        }
    }
})

export default flyoutSlice.reducer;
const actionsObj = flyoutSlice.actions;
export const showAddCustomerComp = actionsObj.addCustomer;
export const showSaveTransactionComp = actionsObj.saveTransaction;