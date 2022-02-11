import React, { useState,useRef, useContext } from "react";
import { getFirestore } from '../../Firebase/Firebase'
import { cartContext } from "../Context/CartProvider";
import firebase from "firebase";

export default function Orders(){
    const {cart, totalCompra} = useContext( cartContext );
    const [orderId, setOrderId] = useState('');

    const nombreRef = useRef();
    const direccionRef = useRef();
    const emailRef = useRef();
    const celularRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nombreRef.current.value,
                address: direccionRef.current.value,
                email: emailRef.current.value,
                mobile: celularRef.current.value,
            },
            items: [cart],
            total: [totalCompra],
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    
    return (

        <>
            {orderId && (<h1>Felicitaciones tu order es {orderId}</h1>)}

            <div>
                <h3>Ingresa tus datos:</h3>

                <input type="text" name="name" ref={nombreRef} placeholder="Nombre y Apelllido" />
                <br />

                <input type="text" name="mobile" ref={celularRef} placeholder="Nro de Celular" />
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />

                <input type="text" name="address" ref={direccionRef} placeholder="Direccion" />
                <br />

                <button onClick={() => handleClick()} >Vamos!</button>
            </div>
        </>
    );
}
