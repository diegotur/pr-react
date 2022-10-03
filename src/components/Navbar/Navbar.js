import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <h1>BOX FACTORY</h1>
            <div>
                <button>Celulares</button>
            </div>
            {<CartWidget />
}        </nav>
    )
}

export default Navbar