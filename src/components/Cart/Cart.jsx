import React, { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import CartItem from "./CartItem";
import { Link} from 'react-router-dom';

export default function Cart(){


    const {cart, clearCart } = useContext( cartContext );

    console.log(cart);

    return(
        <>
        
          {
              cart.length === 0 ?

              <div>
                  <p>Tu carrito esta vacio</p>
                  <Link to={'/'}>OH NO! TU CARRITO ESTA VACIO!!VE A COMPRAR!</Link>
              </div>

              :

              <div>
                
              {cart.map(element => <CartItem key={element.item.id} prod={element} />) }
              <button className="btn-cart" onClick={()=> clearCart() }>Limpiar todo</button>

            </div>
          }
        </>
    )
}