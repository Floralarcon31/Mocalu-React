import React from 'react'
import Cart from './shoppingBag.png'
import { Link } from 'react-router-dom';

const CartWidget = ()=>{
    return(
        <>
        <Link to={'/cart'}  >
        <div className='carritoImg'>
            
                <img src={Cart} alt="shopping bag" />
            
            <p className='numeroCarrito'>0</p>
           
        </div>
         </Link>
        </>
    )
}

export default CartWidget


