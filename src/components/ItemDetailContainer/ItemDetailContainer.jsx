import React, { useState, useEffect } from "react";
import {  useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { getFirestore } from '../../Firebase/FB'

export default function ItemDetailContainer() {

  const { itemid } = useParams();
  const [producto, setProducto] = useState({});
    
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const miItem = itemCollection.doc(itemid);

    miItem.get()    
      .then((doc) => {
        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }
        console.log('item found');
        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])

  return (
    <>
      <ItemDetail producto={producto}/>
    </>
    );
}