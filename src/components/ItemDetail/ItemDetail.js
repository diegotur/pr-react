import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'




const ItemDetail = ({ id, name, img, category, background, description, price, stock }) => {

    
    
    const {addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
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
                    {isInCart(id) && <Link to= '/cart' className= 'ButtonF'>FINALIZAR COMPRA</Link>}
                    
                    </footer>   
                </div> 
        </div> 
            
        </article>
    )
}

export default ItemDetail