import './Cart.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {cart, totalQuantity, total, clearCart} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

return (     
    <div>
        <h1>Cart</h1>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
        <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
)
}

export default Cart