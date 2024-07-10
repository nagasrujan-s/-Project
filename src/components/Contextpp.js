import React, { createContext, useContext, useState } from 'react'

let cart = createContext()
function Contextpp({ children }) {
    let [cartdata, setCartdata] = useState([])
    let getcartadata = (data) => {
        let existingproduct = cartdata.findIndex((item) => item.data.id === data.id)
        console.log(existingproduct)
        if (existingproduct === -1) {
            setCartdata([...cartdata, { data, quantity: 1 }]);
        }
        else {
            increamentQuantity(data)
        }
    }
    let increamentQuantity = (data) => {
        console.log(data);
        let copy = cartdata.slice()
        let existingproduct = cartdata.findIndex((item) => item.data.id === data.id)
        if (existingproduct !== -1) {
            copy[existingproduct].quantity += 1
            setCartdata(copy)
        }
    }
    let decreamentQuantity = (data) => {
        let copy = cartdata.slice()
        let existingproduct = cartdata.findIndex((item) => item.data.id === data.id)
        if (existingproduct !== -1 && copy[existingproduct].quantity > 1) {
            copy[existingproduct].quantity -= 1
            setCartdata(copy)
        }
    }
    let removeCart = (data) => {
        let existingproduct = cartdata.filter((item) => item.data.id !== data.id)
        console.log(existingproduct);
        setCartdata(existingproduct)
    }
    let totalQuantity = () => {
        // let tQuantity = cartdata.reduce((acc, cur) => {
        //     return acc + cur.quantity
        // }, 0)
        return cartdata.length
    }

    let totalPrice = () => {
        let tPrice = cartdata.reduce((acc, cur) => {
            return acc + cur.quantity * cur.data.price
        }, 0)
        return tPrice
    }

    return (
        <div>
            <cart.Provider value={{ getcartadata, cartdata, increamentQuantity, decreamentQuantity, removeCart, totalQuantity, totalPrice }}>
                {children}
            </cart.Provider>
        </div>
    )
}
let useEcom = () => useContext(cart)
export { Contextpp, useEcom }
