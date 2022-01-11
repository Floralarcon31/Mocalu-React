//CSS
import './App.css';
import './components/itemListContainer/itemListContainer.css'

//NAVBAR
import NavBar from './components/NavBar/NavBar';
//ItemListContainer
import ItemListContainer from  './components/itemListContainer/itemListContainer'


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
