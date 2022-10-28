
import React from 'react'
import styled from 'styled-components'
import {IinitialState} from '../types'

interface Istyleprop{
  types:string
}
interface ICustomer{obj:IinitialState}

function Customer(props:ICustomer) {
const {obj}=props
  
const info=()=>{
  const arr=obj.transactions.map((element)=>{
    let got,give;
    if(element.type==='got'){
      got=element.amount;
      give='-';
    }else{
      give=element.amount;
      got='-';
    }
return(<div>
  <b>{element.date}</b>
  <Transaction types={'got'}>{got}</Transaction>
  <Transaction types={'give'}>{give}</Transaction>

</div>)
  })
  return arr
}  

  return (
    <Div>
      <h1>{obj.name}</h1>
{info()}
    </Div>
  )
}

export default Customer

const Div=styled.div`
width:500px;
height:600px;
border:solid 1px black;
justify-content:center;
align-item:center;
float:right;
display:inline-block;
margin:10px;
`

const Transaction=styled.b<Istyleprop>`
color:$${props=>(props.types==='got')?'green':'red'}
`