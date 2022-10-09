import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
//import { GetProducts } from './AsyncMock';



function App() {

  const handleOnAdd = () =>{
    console.log("se hizo click en agregar al carrito")

  }
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer greeting = {'BIENVENIDOS'}/>

      <ItemCount onAdd={handleOnAdd}/>

    </div>
  );
}

export default App;
