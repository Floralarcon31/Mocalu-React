import react from "react";
import ItemCount from "./ItemCount";
import {Card, Button}  from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default function Item({item}){
  
    console.log(item);

    return(
        <> 
            <div className="CardContainer">

                <Card className="CardItem" style={{ width: '18rem' } }>
                <Card.Img variant="top" src={item.img}  />
                <Card.Body>
                    <Card.Title> <p>{item.name} </p></Card.Title>
                    <Card.Text>
                    {item.descripcion}
                    <button> <Link to={'/coleccion1'} >Ver Detalle</Link> </button>
                    </Card.Text>
                    
                    <hr />
                    <p> Stock disponible: {item.stock} </p>
                </Card.Body>
                </Card>


            </div>
           





                 
                
               
                
            
            
        </>
    )
    
}
