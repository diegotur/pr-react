import './Cart.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const removeAlert = () => toast("Vaciaste tu carrito.", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    className:"removeAlert",
        });

const Cart = () => {

    const {cart, totalQuantity, total, clearCart} = useContext(CartContext)

    const handler =()=>{
        removeAlert()
        clearCart()

    }

      if(totalQuantity === 0) {

        return (
            <div>
                <ToastContainer limit={1}/>
            <h1>No hay items en el carrito</h1>
            </div>
        )
    }

return (     
    <div>
        <ToastContainer limit={1}/>
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