import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 




    
    const CartItem = ({ id, name, img, quantity, price }) => {
        const { removeItem } = useContext(CartContext)

        const dismissAll = () =>  toast.dismiss();

                
        const dismissAll2 = () =>  {
            toast.dismiss()
            removeItem(id);
        }

            const removeAlertContent = () => (
            <div>
                <h2>Estás Seguro?</h2>
                <button onClick={dismissAll}>Cancelar</button>
                <button onClick={dismissAll2}>Aceptar</button>
            </div>
            ) 
            
            
            const removeAlert = () => toast(removeAlertContent, {
                position: "bottom-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                className:"removeAlert",
                });
                
            const handleRemove = () => {
                removeAlert() 
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
            <ToastContainer limit={1}/>
        </article>
    )
}

export default CartItem