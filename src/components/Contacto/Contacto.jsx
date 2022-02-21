import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMobile, faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Contacto(){
     
    return(
        <>  
           
            <div className="content-contacto">
              <h2 className="titulo__h2">CONTACTANOS</h2>   

                <div className="contactoContainer">

                <div >
                <span><FontAwesomeIcon  icon={faPhone}  className="iconContacto" /></span>
                <h3> TELEFONO: </h3>
                <p className="contactoP"> 0800 555 555</p>
                </div>
                
                <div>
                <span><FontAwesomeIcon icon={faMobile} className="iconContacto" /></span>
                <h3> WHATSAPP: </h3>
                <p className="contactoP"> (351) 2545422</p>
                </div>
                         
                <div>
                <span><FontAwesomeIcon  icon={faMapPin} className="iconContacto"/></span>
                <h3> DIRECCION: </h3>
                <p className="contactoP"> Alfonsina Storni, Córdoba, Argentina</p>
                </div>
                
                <div>
                <span><FontAwesomeIcon  icon={faEnvelope} className="iconContacto"/></span>
                <h3> EMAIL: </h3>    
                <p className="contactoP"> holaMocalu@gmail.com</p>
                </div>

                </div>
                
                              
 


                
            </div>
                
        </>
    )
    
}