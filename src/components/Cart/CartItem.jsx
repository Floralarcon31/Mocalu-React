import	React, { useContext,useEffect, useState } from 'react';
import { cartContext } from '../Context/CartProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({prod} ) => {

    const {removeItem } = useContext(cartContext);

   

    return (
        <>

            <section id='cart-container-item' className='container my-5'>
                <table className='tableCart'>
                    <thead>
                        <tr>
                            <td>Removee</td>
                            <td>Imagen</td>
                            <td>Poducto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>  <button className='removeBtn' onClick={() => removeItem(prod.item.id) } ><FontAwesomeIcon className="IconTrash"  icon={faTrashAlt} /></button> </td>
                            <td> <img src={prod.item.img} alt="" className="card-img-item" /> </td>
                            <td>  
                                <h5> {prod.item.name }</h5> 
                            </td>
                            <td>
                                <h5>  {prod.item.precio} </h5>
                            </td>
                            <td>{prod.count}</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </section>






        </>
    )
}

export default CartItem