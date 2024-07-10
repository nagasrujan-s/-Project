import React from 'react'
import Displaycartdata from './Displaycartdata'

function Readcartmap({cartdata}) {
  console.log(cartdata)
  return cartdata.map((items)=>(
  <Displaycartdata key={cartdata.id} items={items}/>))
}

export default Readcartmap
