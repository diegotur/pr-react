import './ItemCount.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"



const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    
    const navigate = useNavigate()
    
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }


return(
    <div className='Counter'>          
            <div className='Controls'>
                <button className="ButtonC" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="ButtonC" onClick={increment}>+</button>
            </div>
            <div className='GridButtons'>
                <button className="ButtonA"  onClick={() => onAdd(quantity)}  >AGREGAR AL CARRITO</button>
                
                {/* <Link to={(navigate(-1))} className="ButtonV">VOLVER</Link> */}
            </div>
    </div>
)

}
export default ItemCount