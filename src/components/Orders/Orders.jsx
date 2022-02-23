import React, { useState,useRef, useContext } from "react";
import { getFirestore } from '../../Firebase/Firebase'
import { cartContext } from "../Context/CartProvider";
import firebase from "firebase";
import {Link} from 'react-router-dom';

export default function Orders(){
    const {cart, totalCompra, clearCart} = useContext( cartContext );
    const [orderId, setOrderId] = useState('');

    const nombreRef = useRef();
    const direccionRef = useRef();
    const emailRef = useRef();
    const celularRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        const db = getFirestore();
        const orders = db.collection("orders");

        const totalDelCarrito = totalCompra();

        const miOrden = {
            buyer: {
                name: nombreRef.current.value,
                address: direccionRef.current.value,
                email: emailRef.current.value,
                mobile: celularRef.current.value,
            },
            items: cart,
            total: totalDelCarrito,
            date: firebase.firestore.Timestamp.fromDate(new Date())
           
        }
        console.log(miOrden);
        orders.add(miOrden)
            .then(({ id }) => {
                console.log('Nª de Orden: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }


    
    return (

        <> 
           
            <form onSubmit={handleSubmit} className="containerForm">

                <h3 className="titleForm">Ingresa tus datos</h3>
                <p>Nombre completo:</p>
                <input type="text" required  name="name" className="fieldForm" ref={nombreRef} placeholder="Pepito Perez" />
                
                <p>Celular:</p>
                <input type="tel" required name="mobile" className="fieldForm" ref={celularRef} placeholder="3512545422" />
              
                <p>Email:</p>
                <input type="email" required name="email" className="fieldForm" ref={emailRef} placeholder="ejemplo@gmail.com" />
            
                <p>Direccion:</p>
                <input type="text" required name="address" className="fieldForm" ref={direccionRef} placeholder="calle, numero ,piso, dpto" />
            {
                 orderId.length===0 ?
                    
                 <> <button type="submit" className="btnForm" >
                 
                         Enviar
                     
                     </button>
                        
                     </>
                     :
                     <>
                     {orderId && (<h1 className="titleOrder" >Felicitaciones tu order es {orderId}</h1>) }
                         <Link className="linkAlInicio"  to={'/'} onClick={()=>clearCart()} >Volver al inicio</Link>
                     </>
            }
                    
                        
                        
                        

                        {/* <button type="submit" className="btnForm">
                    
                    Enviar
                
                </button>
              
               
                {orderId && (<h1 className="titleOrder" >Felicitaciones tu order es {orderId}</h1>) } */}
               
            </form>
        
        

           
            
           
        </>
    );
}
