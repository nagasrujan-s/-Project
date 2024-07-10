import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Fetchdata from './Fetchdata'

function Singledata() {
  let [product, setProduct] = useState("")
  let singleid = useParams()
  console.log(singleid)
  let singleob = Object.values(singleid)
  console.log(singleob);
  let singlecon = Number(singleob[0])
  console.log(singlecon);
  let getdata = async () => {
    let data = await Fetchdata.fetchsingledata(singlecon)
    setProduct(data);
  }
  useEffect(() => {
    getdata()
  }, [singlecon])
  console.log(product);

  return (
    <>
      <div className='px-5 py-2'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start p-5" alt="png"></img>
            </div>
            <div className="col-md-8">
              <div className="card-body p-5">
                <h4 className="card-title mb-4 shop">{product.title}</h4>
                <h3 className="card-title mb-4"><span className='me-2'>&#36;</span>{product.price}</h3>
                <p className="card-text mb-4 fs-5">{product.description}</p>
                <div>
                  <span className='me-3'>
                    <button className='btn btn-primary'>BUY NOW</button>
                  </span>
                  <span>
                    <button className='btn btn-danger'>ADD TO CART</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singledata
