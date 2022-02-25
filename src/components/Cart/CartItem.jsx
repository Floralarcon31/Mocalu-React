import	React, { useContext } from 'react';
import { cartContext } from '../Context/CartProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({prod} ) => {

    const {removeItem } = useContext(cartContext);

    return (
        <>
            <section id='cartContainerItem' className='container my-5'>
                <table className='tableCart'>
                    <thead>
                        <tr>                 
                            <td>Imagen</td>
                            <td>Poducto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Total</td>
                            <td>Remover</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td> <img src={prod.item.img} alt="" className="cardImgItem" /> </td>
                            <td>  
                                <h5 className='cardH5'> {prod.item.name }</h5> 
                            </td>
                            <td>
                                <h5 className='cardH5'>  {prod.item.precio} </h5>
                            </td>
                            <td className='cardH5'>{prod.count}</td>
                            <td className='cardH5'>{prod.item.precio * prod.count} </td>
                            <td>  <button className='removeBtn' onClick={() => removeItem(prod.item.id) } ><FontAwesomeIcon className="iconTrash"  icon={faTrashAlt} /></button> </td>
                        </tr>
                        
                    </tbody>
                </table>

                
            </section>

          



        </>
    )
}

export default CartItem