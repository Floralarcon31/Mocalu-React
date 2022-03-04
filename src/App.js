//CSS
import './App.css';
import './components/ItemListContainer/ItemListContainer.css'
import './components/NavBar/NavBar.css'
import './components/Cart/Cart.css'
//NAVBAR
import NavBar from './components/NavBar/NavBar';
//ItemListContainer
import ItemListContainer from  './components/ItemListContainer/ItemListContainer'
//ItemDetailContainer
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
//React-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//WishList
import WishList from './components/WishList'
//CARRITO  
import Cart from './components/Cart/Cart';
import CartProvider from './components/Context/CartProvider';
import Orders from './components/Orders/Orders';
//FOOTER
import Footer from './components/Footer/Footer';
//Contacto
import Contacto from './components/Contacto/Contacto';


function App() {
  return (
    <>
       <CartProvider>   
        <BrowserRouter>
            <NavBar/>
            <Switch>
              
              <Route exact path="/" > <ItemListContainer  greeting="COLECCIÓN VERANO '22 "/> </Route> 

              <Route path="/categoria/:categoriaId" >  <ItemListContainer /> </Route> 

              <Route  path="/producto/:itemid" > <ItemDetailContainer /> </Route> 

              <Route exact path={"/wishlist"} > <WishList /> </Route>

              <Route exact path={"/contacto"}> <Contacto /> </Route>
              
              <Route exact path="/cart" > <Cart />  </Route> 

              <Route  exact path="/orders" >  <Orders /> </Route> 

            </Switch>              
            <Footer /> 
          </BrowserRouter>
       </CartProvider>
    </>
  );
  
}

export default App;
