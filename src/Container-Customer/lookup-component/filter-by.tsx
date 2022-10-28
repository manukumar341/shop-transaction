import React,{useContext} from 'react'
import { context } from '../customer-container'
import {IhandlerFunc} from '../types'
import {Div} from './export-component'

function Filterby():JSX.Element {
const {handleFilter}=useContext(context) as IhandlerFunc

  return (
    <Div>
        <h4>Filter By</h4>
        <select id="sort" onChange={e=>handleFilter(e.target)}>
  <option value="All" selected>All</option>
  <option value="You'll Get">You'll Get</option>
  <option value="You'll Give">You'll Give</option>
  <option value="Settled">Settled</option>
</select>
    </Div>
  )
}

export default Filterby