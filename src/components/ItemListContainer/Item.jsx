import React from "react";
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Item({item}){

    return(
        <> 
            <div className="productCard">
                    <div className="imgProduct">
                        <img src={item.img} />
                        <Link to={'/wishlist'}>
                            <div className="whishlist">
                                <span><FontAwesomeIcon  icon={faHeart} /></span>
                            </div>
                        </Link>                   
                    </div>

                    <div className="infoProduct">
                        <h3 className="titleProduct">{item.name}</h3>
                        <p className="description">{item.descripcion}.</p>

                        <Link className="LinkTo" to={`/producto/${item.id}`}>
                            <button className="btnCart">                   
                            Ver detalle 
                            <span className="bagItem"><FontAwesomeIcon  icon={faShoppingBag} /></span>                     
                            </button>
                        </Link>
                        
                    </div>
                         
                </div>
            
        </>
    )
    
}
