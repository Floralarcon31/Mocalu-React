import React, { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {  Link, useParams} from 'react-router-dom';

const ItemListContainer = (props) => {
    
    const{categoriaId} = useParams();
    
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const Productos = new Promise ((resolve,reject) =>{
        setTimeout( () => {
            resolve([
                {
                    "id":1,
                    "name":"Vestido Rubens",
                    "categoria":"vestido",
                    "descripcion":"vestido rosado",
                    "precio":12950,
                    "stock":10,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/10/AC-234402004-59-725.jpg"
                },
                {
                    "id":2,
                    "name":"Vestido Chicoana",
                    "categoria":"vestido",
                    "descripcion":"vestido rojo",
                    "precio":16170,
                    "stock":12,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/09/AC-234116007-50-235.jpg"
                },
                {
                    "id":3,
                    "name":"Vestido de las Vueltas Estampado",
                    "categoria":"vestido",
                    "descripcion":"vestido largo azul y amarillo",
                    "precio":13436,
                    "stock":8,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/11/AC-234402005-30-738.jpg"
                },
                {
                    "id":4,
                    "name":"Vestidos Rio Iruya",
                    "categoria":"vestido",
                    "descripcion":"vestido blanco corto",
                    "precio":5120,
                    "stock":11,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/08/CD-234215013-01-795.jpg"
                },
                {
                    "id":5,
                    "name":"Camisa Lourdes",
                    "categoria":"camisa",
                    "descripcion":"camisa azul con detalles de colores",
                    "precio":8890,
                    "stock":5,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/12/SI-240188190-30-904.jpg"
                },
                {
                    "id":6,
                    "name":"Camisa Rio Deseado Lino",
                    "categoria":"camisa",
                    "descripcion":"camisa blanca",
                    "precio":11880,
                    "stock":3,
                    "img":"https://cardon.com.ar/wp-content/uploads/2021/10/SI-241640012-01-2244.jpg"
                },
            ]);
        }, 2000)
    });

    useEffect(()=>{
        Productos
            .then(res => { 

                categoriaId

                ? setArrayDeProductos(
                    res.filter ((prod)=> prod.categoria === categoriaId )
                )
                :
                setArrayDeProductos(res)
                
            })
    }, [categoriaId])

    /*funcion onAdd*/
      function onAdd() {
        console.log("Item añadido");
      }
    return (
        <>
            <p className="itemListContainerP">{props.greeting}</p>


            <p> Estoy en la categoria{categoriaId || "principal" }</p>

            <ItemCount stock={10} initial={1}  onAdd={onAdd}  />
            <ItemList list={arrayDeProductos} />
           
        </>
        
    )
}

export default ItemListContainer



