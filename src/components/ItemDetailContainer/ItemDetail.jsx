import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemCount from "../itemListContainer/ItemCount";

export default function ItemDeatil ({producto}){

     /*funcion onAdd*/
     function onAdd() {
        alert( `Añadiste  el producto ${producto.name}` );
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
                                        
                                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}  />
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