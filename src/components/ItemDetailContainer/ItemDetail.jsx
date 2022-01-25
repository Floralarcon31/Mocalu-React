import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemCount from "../itemListContainer/ItemCount";
import ItemListContainer from "../itemListContainer/ItemListContainer";


export default function ItemDeatil ({producto} ){

    return(
        <> 
        
        <div>
                {(producto.id) ?
                    <>{
                        
                        <div className="contenedor">
                    
                            <div className="contenedor__cards">  
                                
                                <div className="card">
                                    <a href="#" className="card__thumbnail"> 
                                    <img src={producto.img} alt="" className="card__img" />
                                    </a>                        
                                    <div className="card__textos">
                                        <h2 className="card__titulo">{producto.name} </h2>
                                        <p>{producto.precio} </p>
                                        <p className="card__extracto">{producto.descripcion} </p> 
                                        <ItemListContainer />
                                        <ItemCount/>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
                                   
                        
                        }</>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
     
        </>
    )
}