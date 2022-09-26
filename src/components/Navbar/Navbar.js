import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/box.png'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className ="contLeft">
            <img src= {logo} alt="box" className="logo"></img>  
            <h1>BOX FACTORY</h1>
            </div>
            <div className="divButtons">
            <Button label='Cajas Chicas'></Button>
            <Button label='Cajas Medianas'></Button>
            <Button label='Cajas Grandes'></Button>
            </div>
            <div>
            <CartWidget />
            </div>

            
        </nav>
    )
}

export default Navbar