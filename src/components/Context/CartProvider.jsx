import React, { createContext, useState } from 'react';

export const cartContext = createContext ();

const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);

    const addToCart = (producto, count) => {
        if (isInCart(producto.id)){

            const indexItem = cart.findIndex(ele => ele.item.id === producto.id);
            cart[indexItem].count = cart[indexItem].count + count;

            setCart([...cart])           
        }else{
            setCart([...cart, { item:producto, count: count }])
        }
        
    }
    
    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)

    }
    
    const removeItem = (id) =>{
        const updateCart = cart.filter(element => element.item.id !== id)
        setCart( updateCart)
    }
    
    const clearCart = () => {
        setCart([])
      }
     
    const totalCompra= () =>{ 
        return (cart.map((item)=>item.item.precio * item.count).reduce((a,b) => a +b));
    }

   
    const totalItems = () => {
        return cart.reduce( (element, item) => element +  item.count ,0 )
    }

  
    return(
        <>
        <cartContext.Provider value= {{ cart, addToCart, removeItem, clearCart, totalCompra,totalItems, clearCart}}>

            {children}

        </cartContext.Provider>
        </>
    )
};

export default CartProvider;