import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext' 


const CartItem = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
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
                <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Quitar</button>
            </footer>
        </article>
    )
}

export default CartItem