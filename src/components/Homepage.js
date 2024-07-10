import React, { useEffect, useState } from 'react'
import Fetchdata from './Fetchdata'
import Readalldata from './Readalldata'

function Homepage() {
    let [product, setProduct] = useState([])
    let getdata = async () => {
        let data = await Fetchdata.fetchalldata()
        setProduct(data)
    }
    console.log(product);
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Readalldata product={product} />
                </div>
            </div>
        </>
    )
}

export default Homepage
