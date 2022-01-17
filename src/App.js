//CSS
import './App.css';
import './components/itemListContainer/itemListContainer.css'

//NAVBAR
import NavBar from './components/NavBar/NavBar';
//ItemListContainer
import ItemListContainer from  './components/itemListContainer/itemListContainer'
//ItemCount
import  ItemCount from './components/itemListContainer/ItemCount';

function App() {
  //ACA SOLO JS
 
  return (
    <>
     <NavBar/>
     <ItemListContainer  greeting="COLECCIÓN VERANO '22 "/>
     
   
    </>
  );
  
}

export default App;
