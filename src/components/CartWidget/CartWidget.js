import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/cartContext'

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext)
    return (
        <div  id="carrito">
            <img id ="cartImg" src={"https://app.projectquoting.com/images/Animated/animat-essential-three/shopping-cart/animat-shopping-cart-color.gif"} alt='cart'/>
            <div id="cartNumber">
            {totalQuantity}
            </div>
        </div>
    )
}

export default CartWidget