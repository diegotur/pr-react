               
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductByCategory } from '../../services/firestore/products'

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        getProductByCategory().then(data => {
            setCategories(data)
        })
    }, []) 

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
    
   