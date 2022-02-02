import	React, { useContext } from 'react';
import { cartContext } from '../Context/CartProvider';


const CartItem = ({prod} ) => {

    const {removeItem} = useContext(cartContext);

    return (
        <>

        
            <div> 
                <h3>Producto: {prod.item.name }</h3>
                 <p>Cantidad: {prod.count} </p> 
                 <button onClick={() => removeItem(prod.item.id) } >Borrar X</button>
            </div>
        

        </>
    )
}

export default CartItem