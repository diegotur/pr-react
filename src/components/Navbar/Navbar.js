import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className ="contLeft">
            <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo"></img></NavLink>
            </div>
            <div className="Categories">
                <NavLink to={'/category/PS4'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/1280px-PlayStation_4_-_Logo.svg.png"} alt='PS4'/>
                </NavLink>
                <NavLink to={'/category/XBOX'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img src={"https://logodownload.org/wp-content/uploads/2018/11/xbox-logo-3.png"} alt='XBOX'/>
                </NavLink>
                <NavLink to={'/category/STEAM'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png"} alt='STEAM'/>
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