import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/cartContext'


const ItemDetail = ({ id, name, img, category, background, description, price, stock }) => {
    
    const {addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
    }

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
                    <ItemCount onAdd={handleOnAdd} stock={stock} category={category}/>
                    </footer>   
                </div> 
        </div> 
            
        </article>
    )
}

export default ItemDetail