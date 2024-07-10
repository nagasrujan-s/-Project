import React from 'react'
import { useEcom } from './Contextpp'
import Readcartmap from './Readcartmap'

function Readcartdata() {
  let {cartdata}=useEcom()
  console.log(cartdata);
  return (
    <>
    <Readcartmap cartdata={cartdata}/>
    </>
  )
}

export default Readcartdata
