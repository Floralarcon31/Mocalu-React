//CSS
import './App.css';
import './components/itemListContainer/itemListContainer.css'
import './components/NavBar/NavBar.css'

//NAVBAR
import NavBar from './components/NavBar/NavBar';
//ItemListContainer
import ItemListContainer from  './components/itemListContainer/ItemListContainer'
//ItemDetailContainer
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
//React-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Carrito    
import Cart from './components/Cart/Cart';
import CartProvider from './components/Context/CartProvider';



function App() {
  return (
    <>

       <CartProvider>

        <BrowserRouter>
            <NavBar/>

            <Switch>
              {/*ruta home*/} 
              <Route exact path="/" > <ItemListContainer  greeting="COLECCIÓN VERANO '22 "/> </Route> 

              {/*ruta categoria*/} 
              <Route path="/categoria/:categoriaId" >  <ItemListContainer /> </Route> 

              {/*ruta item*/} 
              <Route  path="/producto/:itemid" > <ItemDetailContainer /> </Route> 
              
              {/*ruta carrito*/}
              <Route exact path="/cart" > <Cart />  </Route> 

            </Switch>
              
            {/*aca footer*/}    
          </BrowserRouter>

       </CartProvider>
    </>
  );
  
}

export default App;
