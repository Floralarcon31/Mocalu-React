import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../Context/CartProvider";


const CartWidget = ()=>{

    const {totalItems} = useContext( cartContext );

    return(
        <>
        <Link to={'/cart'}  className="LinkNumCart" >
        <div className='carritoImg'>
            
                <span><FontAwesomeIcon  icon={faShoppingBag} /></span>
            
            <span className='numeroCarrito'>{totalItems() !== 0 ? totalItems() : ''}</span>
           
        </div>
         </Link>
        </>
    )
}

export default CartWidget


