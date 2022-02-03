import React, { useState } from "react";
import { Button}  from 'react-bootstrap';

export default function ItemCount( {stock, initial, onAdd})  {
    
    const [count, setCount] = useState(stock > 0 ? 1 : initial);
  
    return (
      <>  
                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none'}}  disabled={count < 1}  onClick={() => { setCount(count - 1);}} > - </Button>
                        <div>{count}</div>
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none'}}  disabled={count >= stock}  onClick={() => { setCount(count + 1); }}> +  </Button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button style={{ backgroundColor:'rgb(255, 124, 255)', border:'none', color:"white" }} variant="outline-primary"  onClick={() => onAdd(count)}>
                        Agregar al carrito
                        </Button>
                    </div>
                </div>

      </>
    );
  }