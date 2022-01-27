import react from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Bag from './Bag.png'



export default function Item({item}){
  
    console.log(item);
    

    return(
        <> 
        <div className="ContainerCards">

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
                        <img src={Bag} alt="shopping bag" className="bag-item"/>
                        </Link>
                        </button>
                        
                    </div>

                            
                </div>

        </div>
            





                 
                
               
                
            
            
        </>
    )
    
}
