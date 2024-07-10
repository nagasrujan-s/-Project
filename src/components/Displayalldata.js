import React from 'react'
import { Link } from 'react-router-dom'
import './displayalldata.css'
import { useEcom } from './Contextpp'

function Displayalldata({ items }) {
    let { getcartadata } = useEcom()
    let getdata=()=>{
        getcartadata(items)
    }
    return (
        <>
            <div className='col-md-3'>
                <div className="card card1">
                    <img src={items.image} className="card-img-top img" alt="png"></img>
                    <div className="card-body mb-4 text-center">
                        <h6 className="card-title mb-4 shop">{items.title}</h6>
                        <h4 className="card-title mb-4 fw-bolder"><span className='me-2'>&#36;</span>{items.price}</h4>
                        <button onClick={getdata} className='btn btn-info w-75 rounded-pill bg mb-2'>ADD TO CART</button>
                        <Link to={`/components/Singledata/${items.id}`}> <button className='btn btn-success w-75 rounded-pill bg'>MORE ABOUT</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Displayalldata
