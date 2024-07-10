import React, { useState } from 'react'
import './displaycartdata.css'
import { useEcom } from './Contextpp'
import Payment from './Payment';
import Onlinepay from './Onlinepay';

function Displaycartdata({ items }) {
    let [show, setShow] = useState(false)
    let [onshow, setOn] = useState(false)
    console.log(items);
    let { increamentQuantity, decreamentQuantity, removeCart, totalQuantity } = useEcom()
    let quantityof = totalQuantity()
    console.log(quantityof);
    let inc = () => {
        increamentQuantity(items.data)
    }
    let dec = () => {
        decreamentQuantity(items.data)
    }
    let remove = () => {
        removeCart(items.data)
    }
    console.log(items)
    let showHandler = () => {
        setShow(true)
    }
    let onLine = () => {
        setOn(true)
    }
    let onLineClose = () => {
        setOn(false)
    }
    let closeHandler = () => {
        setShow(false)
    }
    return (
        <>

            <div className='container cartcard'>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={items.data.image} class="img-fluid rounded-start p-5" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-5">
                                <h3 class="card-title mb-3">{items.data.title}</h3>
                                <h2 className="card-title mb-3">{items.data.price * items.quantity}</h2>
                                <div className='mb-3'><button onClick={inc} className='btn btn-primary me-2'>+</button>{items.quantity}<button onClick={dec} className='btn btn-danger ms-2'>-</button></div>
                                <a href="#" onClick={remove} className="btn btn-primary">Remove From Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <button onClick={showHandler} className='btn btn-primary mb-2'>Cash on</button>
                </div>
                <div>
                    <button onClick={onLine} className='btn btn-danger'>Online</button>
                </div>
            </div>

            {
                show === true && <Payment closeHandler={closeHandler} />

            }
            {
                onshow === true && <Onlinepay onLineClose={onLineClose} />
            }


        </>

    )
}

export default Displaycartdata


