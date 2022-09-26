import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img id ="cartImg" src={cart} alt='cart'/>
            0
        </div>
    )
}

export default CartWidget