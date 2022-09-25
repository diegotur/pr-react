import './App.css';
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Button from './components/Button/Button'


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting = {'BIENVENIDOS'}/>
      <CartWidget/>
      <Button/>

    </div>
  );
}

export default App;
