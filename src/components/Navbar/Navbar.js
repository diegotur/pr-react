/* import './Navbar.css'
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
 */
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
            console.log(response)
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

//<img src={`${cat.img}`}/>