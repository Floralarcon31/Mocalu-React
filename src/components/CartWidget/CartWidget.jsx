import React from 'react'
import Cart from './shoppingBag.png'

const CartWidget = ()=>{
    return(
        <>
        <div className='carritoImg'>
            <img src={Cart} alt="shopping bag" />
            <p className='numeroCarrito'>0</p>
        </div>
        
        </>
    )
}

export default CartWidget


