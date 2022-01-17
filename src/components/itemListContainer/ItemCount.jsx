import React, { useState } from "react";
import {Card}  from 'react-bootstrap';

export default function ItemCount (stock, initial  ){
    const [count, setCount] = useState(initial)

    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Vestido Rubens</Card.Title>
                 
                    <button onClick={()=>setCount(count - 1)}>-</button>
                    <input value={count} /> 
                    <button onClick={()=>setCount(count + 1)}> + </button>
                    <button>Agregar al Carrito</button>
                </Card.Body>
        </Card>
        </>
    )
}