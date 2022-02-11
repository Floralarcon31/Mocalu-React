import React, { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import CartItem from "./CartItem";
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Cart(){


    const {cart, clearCart, totalCompra} = useContext( cartContext );
   
    return(
        <>
        
          {
              cart.length === 0 ?

              <div className="containerCarrito">
                  <span><FontAwesomeIcon className="IconCart"  icon={faShoppingBag} /></span>
                  <h3>Tu carrito esta vacio...</h3>
                  <p>OH NO! Todavia no agregaste productos a tu carrito!</p>
                  

                  <button className="ContinuarComprandoBtn">
                    <Link className="ContinuarComprandoLink" to={'/'}>Continuar comprando</Link>
                  </button>
                  
                  <p>Navegá las categorías y agregá productos a tu carrito!</p>
                  <li className="listaCatCart">
                  <Link className="CategoriaCart" to={'/categoria/vestido'} >Vestidos - </Link> <Link className="CategoriaCart"  to={'/categoria/camisa'}>Camisas</Link>
                  </li>

                
                  
              </div>

              :

              <div className="clear">
                
              {cart.map(element => <CartItem key={element.item.id} prod={element} />) }
              <p>Total a pagar {totalCompra ()} </p>
              <button className="btn-clear" onClick={()=> clearCart() }>Limpiar todo</button>

            </div>
          }
        </>
    )
}