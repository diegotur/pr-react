import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/box.png'
import Button from '../Button/Button'
import Button1 from '../Button/Button1'
import Button2 from '../Button/Button2'


const Navbar = () => {
    return (
        <nav className = "Navbar">
            <img src= {logo} alt="box" className="logo"></img>  
                <Button />
                <Button1/>
                <Button2/>
            <CartWidget />
        </nav>
    )
}
export default Navbar