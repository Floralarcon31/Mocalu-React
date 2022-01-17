import React from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    return (
        <>
            <p className="itemListContainerP">{props.greeting}</p>
            <ItemCount stock={10} initial={1} />
        </>
        
    )
}

export default ItemListContainer