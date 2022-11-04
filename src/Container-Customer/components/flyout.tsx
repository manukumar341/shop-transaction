import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../store/hook'
import NewCustomer from './new-customer/new-customer'
import AddNewEntry from './transactions/add-new-entry'
function Flyout() {
    const store = useAppSelector(state => state);
    const { name } = store.transactions
    const addCustomerToggle = store.flyout.addCustomer
    const saveTransactionToggle = (store.flyout.saveTransaction) ? true : false;

    return (
        <Div>
            {!saveTransactionToggle && <FlyoutDiv isFloat={addCustomerToggle}>
                {addCustomerToggle && <NewCustomer />}
            </FlyoutDiv>}
            {!addCustomerToggle && <FlyoutDiv isFloat={saveTransactionToggle}>

                {saveTransactionToggle && <AddNewEntry />}
            </FlyoutDiv>}
        </Div>
    )
}

export default Flyout

interface Iprop {
    isFloat: boolean;
}

const Div = styled.div`
position: relative;
margin:15px 15px;
float: right;
`

const FlyoutDiv = styled.div<Iprop>`
height:100px;
width:100px;
background:#fff;
position: absolute;
right:0;
background-color:white;
border: 3px solid green;
z-index:10;
animation:flyout 1s;
@keyframes flyout {
    0% {
      opacity: 0%;
      transform: translateX(400px);
    }

    100% {
      opacity: 100%;
      transform: translate(0);
    }
  
 }

`

