import React from 'react'
import { useEcom } from './Contextpp'

function Payment({ closeHandler }) {
  let { totalQuantity, totalPrice } = useEcom()
  let quantity = totalQuantity()
  let close = () => {
    closeHandler()
  }
  let price = totalPrice()
  return (
    <>
      <form>

        <div className='col-md-3'>
          <div>
            <label>Total Amount</label>
            <input value={price} readOnly className='form-control'></input>
          </div>
          <div>
            <label>Name</label>
            <input className='form-control'></input>
          </div>
          <div>
            <label>City</label>
            <input className='form-control'></input>
          </div>
          <div>
            <label>Contact Number</label>
            <input className='form-control'></input>
          </div>
        </div>
        <div className='col-md-3'>
          <div><h3>Total Quantity:{quantity}</h3></div>
          <div><h3>Total Price:{price}</h3></div>
        </div>
        <div><button onClick={close} className='btn btn-info'>Cancel</button></div>
      </form>
    </>
  )
}

export default Payment
