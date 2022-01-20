import React, { useState } from "react";
import {Card, Button}  from 'react-bootstrap';
import imgVestido from './vestidoRubens.png'


export default function ItemCount(props) {
    const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);
  
    return (
      <>
        
        <Card className="cardProducto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgVestido} />
            <Card.Body>
                <Card.Title className="cardTitle">Vestido Rubens</Card.Title>
                 
                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none'}}  disabled={count < 1}  onClick={() => { setCount(count - 1);}} > - </Button>
                        <div>{count}</div>
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none'}}  disabled={count >= props.stock}  onClick={() => { setCount(count + 1); }}> +  </Button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none', color:"white" }} variant="outline-primary"  onClick={() => props.onAdd()}>
                        Agregar al carrito
                        </Button>
                    </div>
                </div>

            </Card.Body>
        </Card>

     
      </>
    );
  }