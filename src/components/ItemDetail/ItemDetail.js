import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemDetail = ({ id, name, img, category, background, description, character, price, stock }) => {
    
    const Msg = () => (
        <div>
            <div>
                Agregaste 
            </div>
            <div className='nameCh'>
                {name}
            </div>
            <br></br>
            <div>
                Ve ahora a tu carrito,
            </div>
            <div className='character'>
                {character}
            </div>
            <div>
                está esperándote
            </div>
        </div>
      )
    const notify = () => toast(Msg, {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
        theme: "light",
        className:"toastStyle"
        });
    
    const {addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        notify()

        const productToAdd = {
            id, name, img, price, quantity
        }
        addItem(productToAdd)
        
    }
    

const quantityAdded = getProductQuantity(id)

    return (
        <article className="Card">
            <img src={background} alt={name} className="ItemBG"/>

            <div className='TotalCard'>
                <header className="Header">
                    <h1 className="ItemHeader">
                        {name}
                    </h1>
                </header>

                <div className="CardItem">
                    <picture className='ImgContainer'>
                        <img src={img} alt={name} className="ItemImg"/>
                    </picture>
                    <div className='CardInfo'>
                        <section className='SectionInfo'>
                            
                            <p className="InfoDescription">
                                {description}
                            </p>
                            <p className="InfoDetail">
                                Categoría: {category}
                            </p>
                            <p className="InfoPrice">
                                Precio: ${price}
                            </p>
                        </section>           
                    </div>
                    <footer className='ItemFooterInfo'>
                    {stock !==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} category={category}/>
                    :<h2 className='stock'>SIN STOCK</h2>}
                    <ToastContainer limit={1}/>
                    {isInCart(id) && <Link to= '/cart' className= 'ButtonF'>FINALIZAR COMPRA</Link>}
                    
                    </footer>   
                </div> 
        </div> 
            
        </article>
    )
}

export default ItemDetail