import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../Context/CartProvider";
import ItemCount from "../itemListContainer/ItemCount";

export default function ItemDeatil ({producto}){

    const{ addToCart} = useContext(cartContext);
 
    const [count, setCount] = useState(null);

    const [mostrarItemCount, setMostrarItemCount] = useState(true);
     /*funcion onAdd*/
     function onAdd(count) {
        setCount(count);
        addToCart(producto, count)
        setMostrarItemCount(false)
      }

    return(
        <>       
        <div>
                {(producto.id) ?
                    <>{               
                        <div className="contenedor">
                    
                            <div className="contenedor__cards">  
                                
                                <div className="card">
                                    <div className="card__thumbnail"> 
                                    <img src={producto.img} alt="" className="card__img" />
                                    </div>                        
                                    <div className="card__textos">
                                        <h2 className="card__titulo">{producto.name} </h2>
                                        <p> Precio Final:{producto.precio} </p>
                                        <p className="card__extracto">{producto.descripcion} </p> 

                                        {
                                            (mostrarItemCount)?

                                            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}  />

                                            : 
                                            <div>
                                                <button className="btn-cart">
                                                <Link className="LinkTo"  to={'/cart'}> Ver {producto.name} ({count}) en el carro  </Link>
                                                </button>
                                            </div>
                                        }                                      
                                    </div> 
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