import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../Context/CartProvider";
import ItemCount from "../ILC/ItemCount";

export default function ItemDeatil ({producto}){

    const{ addToCart} = useContext(cartContext);
 
    const [count, setCount] = useState(null);

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

     function onAdd(count) {
        setCount(count);
        alert(`Agregaste ${count} ${producto.name}`)
        addToCart(producto, count)
        setMostrarItemCount(false)
      }

    return(
        <>       
        <div>
                {(producto.id) ?
                    <>{               
                        
                        <div className="itemDetailContainer">

                            <div className="itemDetail">
                                
                                <div className="itemDetailImg"> 
                                <img src={producto.img} alt={producto.name} className="detailImg" />
                                </div>     

                                <div className="itemDetailDetalle">
                                    <h2>{producto.name} </h2>
                                    
                                    <p className="itemDetailDescripcion">{producto.descripcion} </p> 
                                    <p className="itemDetailPrecio"> Precio Final: <b>$ {producto.precio} </b> </p>
                                    {
                                        (mostrarItemCount)?

                                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}  />

                                        : 
                                        <div>
                                            <Link className="LinkTo"  to={'/cart'}>
                                                <button className="btnCart">
                                                Ver Carrito
                                                </button>
                                            </Link>
                                        </div>
                                    }                                      
                                </div> 
                                                     
                            </div>                   

                        </div>
                           
                        }</>
                    :
                    <>Loading...</>
                }
        </div>
     
        </>

       
    )
}