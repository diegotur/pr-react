import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    
    const {totalQuantity, total} = useContext(CartContext)
    return (
        <div  id="carrito">
            <Link id= "linkCarrito" to="/cart">
            <img id ="cartImg" src={"https://app.projectquoting.com/images/Animated/animat-essential-three/shopping-cart/animat-shopping-cart-color.gif"} alt='cart'/>
            <div id="cartNumber">
            {totalQuantity}
            </div>
            <div id="cartTotalPrice">
            ${total}
            </div>
            </Link>
        </div>
    )   
}

export default CartWidget