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
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        <div className='totalGrid'>
        <h1 className='total'>Total: ${total}</h1>
        <button onClick={() => clearCart()} className="vaciarCarritoBtn">VACIAR CARRITO</button>
        </div>
        <div className='divLink'>
        <Link to='/checkout' className='confirmBtn'>Confirmar Compra</Link>
        </div>
    </div>
)
}

export default Cart