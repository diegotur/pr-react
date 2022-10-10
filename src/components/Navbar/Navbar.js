import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/box.png'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className ="contLeft">
                <img src= {logo} alt="box" className="logo"></img>  
                <h1 id="boxFactory">BOX FACTORY</h1>
            </div>
            <div className="Categories">
                <NavLink to={'/category/chica'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img id ="btnC" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/1280px-PlayStation_4_-_Logo.svg.png"} alt='caja chica'/>
                </NavLink>
                <NavLink to={'/category/mediana'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img id ="btnM" src={"https://logodownload.org/wp-content/uploads/2018/11/xbox-logo-3.png"} alt='caja mediana'/>
                </NavLink>
                <NavLink to={'/category/grande'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img id ="btnG" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png"} alt='caja grande'/>
                </NavLink>
            </div>
            <div></div>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar