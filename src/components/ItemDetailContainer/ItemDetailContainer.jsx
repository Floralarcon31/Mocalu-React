import React, { useState, useEffect } from "react";
import {  useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { getFirestore } from '../../firebase/firebase'

export default function ItemDetailContainer() {

  const { itemid } = useParams();

  const [producto, setProducto] = useState({});

    
    
  useEffect(() => {
    //base de datos
    const db = getFirestore();
    //traer los items - nombre de la coleccion que esta en firebase
    const itemCollection = db.collection("items");

    //id del producto - trae uno
    const miItem = itemCollection.doc(itemid);

    miItem.get()    
      .then((doc) => {
        /*
        console.log(doc.data());
        console.log(doc.id);
        */
       //controlas existes si llegao no el documento
        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }
        //si llega prducto
        console.log('item found');
        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])

  return (
   
    <>
      {itemid}
      <ItemDetail producto={producto}/>
      
  
    </>
    );
}