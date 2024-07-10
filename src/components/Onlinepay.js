import React from 'react'

function Onlinepay({onLineClose}) {
    let onclose=()=>{
        onLineClose()
    }
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        UPI
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Credit/Debit/ATM Card
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Net Banking
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                        EMI
                    </label>
            </div>
            <div><button onClick={onclose} className='btn btn-info'>Cancle</button></div>
        </>
    )
}

export default Onlinepay
