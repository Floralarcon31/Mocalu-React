import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import {  useParams} from 'react-router-dom';
import { getFirestore } from '../../Firebase/Firebase'

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
            <div className="listContainer">
            <ItemList list={arrayDeProductos} />
            </div>         

        </>
        
    )
}

export default ItemListContainer



