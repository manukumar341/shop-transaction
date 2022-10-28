import React,{ useContext } from 'react'
import {context} from '../customer-container'
import {IhandlerFunc} from '../types'
import {Div} from './export-component'
function Sortby():JSX.Element {

// const {handleSort}=React.useContext(context) as IhandlerFunc
// const obj=useContext(context)  <select id="sort" onChange={e=>obj?.handleSort(e.target)}>
const {handleSort}=useContext(context) as IhandlerFunc
  
return (
    <Div>
        <h4>Sort By</h4>
        <select id="sort" onChange={e=>handleSort(e.target)}>
  <option value="Sort by" selected>By Name</option>
  <option value="high-low">Highest Amount</option>
  <option value="low-high">Least Amount</option>
</select>
    </Div>
    
  )
}

export default Sortby