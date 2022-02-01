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



function App() {
  //ACA SOLO JS
 
  return (
    <>
    <BrowserRouter>
      <NavBar/>

      <Switch>
         {/*ruta home*/} 
        <Route exact path="/" >
          
          <ItemListContainer  greeting="COLECCIÓN VERANO '22 "/>
 
        </Route> 
        {/*ruta item*/} 
        <Route  path="/producto/:itemid" >
            
          <ItemDetailContainer /> 

        </Route> 
          {/*ruta categoria*/} 
        <Route path="/categoria/:categoriaId" >

          <ItemListContainer />
         
        </Route> 

        <Route exact path="/cart" >

          <Cart /> 
          
        </Route> 

      </Switch>
        
      {/*aca footer*/}    
     </BrowserRouter>
    </>
  );
  
}

export default App;
