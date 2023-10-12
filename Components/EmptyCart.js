import React from 'react'
import EmptyCartImg from "../Images/cartImage/empty-cart.png"
const EmptyCart = () => {
  return (
    <div className="Empty-cart">
        <div>
            <h2 style={{color:"#0165B8"}}><b>Your Cart is empty</b></h2>
            <img src={EmptyCartImg}  alt="" />
           
        </div>
    </div>
  )
}

export default EmptyCart
