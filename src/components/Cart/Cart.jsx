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
                  <h3 className="carritoVacioTitle">Tu carrito esta vacio...</h3>
                  <p>OH NO! Todavia no agregaste productos a tu carrito!</p>
                  
                  <Link className="ContinuarComprandoLink" to={'/'}>
                  <button className="ContinuarComprandoBtn">
                   Continuar comprando
                  </button>
                  </Link>
                  <p>Navegá las categorías y agregá productos a tu carrito!</p>
                  <li className="listaCatCart">
                  <Link className="CategoriaCart" to={'/categoria/vestido'} >Vestidos - </Link> <Link className="CategoriaCart"  to={'/categoria/camisa'}>Camisas -  </Link> 
                  <Link className="CategoriaCart" to={'/categoria/accesorios'} > Accesorios - </Link> <Link className="CategoriaCart" to={'/categoria/pantalones-shorts'} >Pantalones y Shorts </Link> 
                  </li>
               
              </div>

              :

              <div className="clear">
                
              {cart.map(element => <CartItem key={element.item.id} prod={element} />) }

            <section  id='cartBottom' className='containerCartBottom'>
                    <div className='row '>
                        <div className="clear col-lg-6 col-md-6 col-12 mb-4"> 
                            <div >
                              <h5>Vaciar carro</h5>
                              <p>Quieres vaciar el carrito?</p>
                               <button onClick={()=> clearCart() }>Limpiar todo</button>
                            </div>
                        </div>
                        
                        <div className='totalCart col-lg-6 col-md col-12 '>
                            <div>
                                <h5>TOTAL</h5>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Total</h6>
                                        <p>$ {totalCompra ()} </p>
                                    </div>
                                    <Link to={'/Orders'}> 
                                    <button className="ml-auto" >Generar orden</button>
                                    </Link>
                               
                            </div>
                        </div>
                    </div>                  
            </section>
            </div>            
          }
        </>
    )
}