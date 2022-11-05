import './Cart.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'
import Swal from "sweetalert2"




const Cart = () => {

    const {cart, totalQuantity, total, clearCart} = useContext(CartContext)

    const handler =()=>{
        clearCart()
        Swal.fire({
            text:`Vaciaste el carrito`,
            icon: true,
            buttons: true,
            dangerMode: true,
            timer:3000,
            customClass:"emptyAlert"
        })
    }

    if(totalQuantity === 0) {
        return (
            <div>
        <h1>No hay items en el carrito</h1>
        </div>
    )
}
    
    return (     
        <div>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        <div className='totalGrid'>
        <h1 className='total'>Total: ${total}</h1>
        <button onClick={() => handler()} className="vaciarCarritoBtn">VACIAR CARRITO</button>
        </div>
        <div className='divLink'>
        <Link to='/checkout' className='confirmBtn'>Completá tus datos</Link>
        </div>
    </div>
)
}

export default Cart