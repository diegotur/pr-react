import './App.css';
import { CartProvider } from './CartContext/CartContext';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOut/CheckOut';
/* import Contact from './Contact/Contact' */


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>  
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>c
        <Route path='/cart' element={<Cart/>}/>
{/*         <Route path='/contact' element={<Contact/>}/> */}
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
