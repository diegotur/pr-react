import { useContext } from "react"
import { CartContext } from "../../CartContext/cartContext"

const Cart = () => {

    const {cart, removeItem, total, clearCart} = useContext(CartContext)

    console.log(cart)
    return(
        <div>
            Cart

            {cart.map(prod => (
                <div>
                {prod.name}  - CANTIDAD {prod.quantity}
                <button onClick={()=>removeItem(prod.id)}>X</button>
                </div>
            )
            )}
            <div>
            PRECIO TOTAL: {total}
            </div>
            <div>
            <button onClick={()=>clearCart()}>LIMPIAR CARRITO</button>
            </div>
        </div>

        
        
    )
}





export default Cart