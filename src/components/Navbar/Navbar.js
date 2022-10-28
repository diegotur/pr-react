import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../services/firebase'


const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
    
        const collectionRef = query (collection(db, 'categories'), orderBy("order"));

        getDocs(collectionRef).then(response =>{
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data();
                const id = doc.id

                return {id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    },[])

    
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
