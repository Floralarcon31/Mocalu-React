import React, { createContext, useState } from 'react';

export const cartContext = createContext ();

const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);

    //AGREGAR AL CARRITO

    const addToCart = (producto, count) => {
        if (isInCart(producto.id)){

            const indexItem = cart.findIndex(ele => ele.item.id === producto.id);
            cart[indexItem].count = cart[indexItem].count + count;

            setCart([...cart])           
        }else{
            setCart([...cart, { item:producto, count: count }])
        }
        
    }
    //si existe o no el producto - utilizo metodo some (prueba si algun elemento pasa la prueba propuesta por la funcion y arroja T OR F) - uso interno en contexto
    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)

    }
    //remover el producto(1) - esta funcion se comparte fuera de contexto /se utiliza en cartItem
    const removeItem = (id) =>{
        const updateCart = cart.filter(element => element.item.id !== id)
        setCart( updateCart)
    }
    //vaciar carrito - se comparte con cart
    const clearCart = () => {
        setCart([])
      }
    

    return(
        <>
        <cartContext.Provider value= {{ cart, addToCart, removeItem, clearCart }}>

            {children}

        </cartContext.Provider>



        </>
    )
};

export default CartProvider;