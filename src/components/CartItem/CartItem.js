import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Swal from "sweetalert2"

 

    const CartItem = ({ id, name, img, quantity, price }) => {
        const { removeItem } = useContext(CartContext)

        const handleRemove=()=>{
            removeItem(id)

            Swal.fire({
                title: `${name}`,
                text:`Eliminado del carrito`,
                icon: true,
                buttons: true,
                dangerMode: true,
                timer:3000,
                customClass:"removeAlert"

            })
        }
    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                    {<img className="ImgCartItem" src={img} alt={name}></img>}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                <p className="InfoCartItem">
                    Subtotal: ${price * quantity}
                </p>
                <button className='ButtonCartItem' onClick={() => handleRemove()}>Quitar</button>
            </footer>
        </article>
    )
}

export default CartItem