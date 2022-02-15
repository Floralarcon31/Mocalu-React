import React from "react";
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Item({item}){
  
    //console.log(item);
    
    return(
        <> 
       

            <div className="product-card">
                    <div className="img-product">
                        <img src={item.img} />
                                
                        <div className="whishlist">
                            <span><FontAwesomeIcon  icon={faHeart} /></span>
                        </div>

                    </div>

                    <div className="info-product">
                        <h3 className="title-product">{item.name}.</h3>
                        <p className="description">{item.descripcion}.</p>

                        
                        <button className="btn-cart">
                        <Link className="LinkTo" to={`/producto/${item.id}`}>
                           Ver detalle 
                           <span className="bag-item"><FontAwesomeIcon  icon={faShoppingBag} /></span>
                       
                        </Link>
                        </button>
                        
                    </div>

                            
                </div>

       
            
        </>
    )
    
}
