import cart from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div  id="carrito">
            <img id ="cartImg" src={cart} alt='cart'/>
            <div id="cartNumber">
            0
            </div>
        </div>
    )
}

export default CartWidget