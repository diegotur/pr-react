import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/box.png'
import Button from '../Button/Button'
import btnC from '../Button/assets/cajachica.png'
import btnM from '../Button/assets/cajamediana.png'
import btnG from '../Button/assets/cajagrande.png'


const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className ="contLeft">
            <img src= {logo} alt="box" className="logo"></img>  
            <h1 id="boxFactory">BOX FACTORY</h1>
            </div>
            
            <div className="divButtons">
                <Button>
                <img id ="btnC" src={btnC} alt='caja chica'/>
                </Button>
                <Button>
                <img id ="btnM" src={btnM} alt='caja mediana'/>
                </Button>
                <Button>
                <img id ="btnG" src={btnG} alt='caja grande'/>
                </Button>
            </div>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar