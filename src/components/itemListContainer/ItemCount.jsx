import React, { useState } from "react";
import { Button}  from 'react-bootstrap';

export default function ItemCount(props) {
    const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);
  
    return (
      <>
    
                 
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


     
      </>
    );
  }