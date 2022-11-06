import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { getProductByCategory } from '../../services/firestore/products'
import { useAsync } from '../../Hooks/useAsync'

const Navbar = () => {


    const {data: categories, error, loading} = useAsync(getProductByCategory, [])

    if (error){
        <h1>Hubo Un error</h1>
    }

    if(loading) {
        return <nav className = "Navbar">
        <div className ="contLeft">
        <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo"></img></NavLink>
        </div>
        <div className="Categories">
        </div>
        <div></div>
        <div>
        <CartWidget />
        </div>
    </nav>

    }

    return (
        <nav className = "Navbar">
            <div className ="contLeft">
            <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo"></img></NavLink>
            </div>
            <div className="Categories">
            {
                categories.map(cat=>(
                    
                    <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}><img src={cat.img} alt={cat.alt}/>
                    </NavLink>
                    ))
                }
            
            </div>
            <div></div>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar
    
   