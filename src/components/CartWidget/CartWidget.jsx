import React from 'react'
import Cart from './shoppingBag.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ()=>{
    return(
        <>
        <Link to={'/cart'}  className="LinkNumCart" >
        <div className='carritoImg'>
            
                <span><FontAwesomeIcon  icon={faShoppingBag} /></span>
            
            <p className='numeroCarrito'>0</p>
           
        </div>
         </Link>
        </>
    )
}

export default CartWidget


