import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import {  useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase'

const ItemListContainer = (props) => {     
    const{categoriaId} = useParams();  
    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    useEffect(() => {
      const db = getFirestore();  
      let itemCollection ;

      if (categoriaId != undefined) {
       itemCollection= db.collection("items").where("categoria", "==", categoriaId)
      } else {
       itemCollection = db.collection("items")
      }

      itemCollection.get()
          .then((querySnapShot) => {   
            if (querySnapShot.size == 0) {
              console.log('No hay documentos con en ese query');
              return
            }
            console.log('hay documentos');   
            //console.log(querySnapShot.docs);
            setArrayDeProductos(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
          })
          .catch((err)=>{
            console.log(err);
        })
  }, [categoriaId])
    return (
        <>
            <p className="itemListContainerP">{props.greeting}</p>
 
            <p> Estoy en la categoria{categoriaId || "principal" }</p>

            <ItemList list={arrayDeProductos} />

        </>
        
    )
}

export default ItemListContainer



