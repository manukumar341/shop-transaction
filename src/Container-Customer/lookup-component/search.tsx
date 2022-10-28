import React,{useContext} from 'react'
import { context } from '../customer-container'
import {IhandlerFunc} from '../types'
import {Div} from './export-component'



function Search():JSX.Element {
    const {handleSearch}=useContext(context) as IhandlerFunc
  return (
    <Div>
        <h4>Search for Customers</h4>
        <input type='text' placeholder='Search by Name....' onChange={e=>handleSearch(e.target)}/>
    </Div>
  )
}

export default Search

