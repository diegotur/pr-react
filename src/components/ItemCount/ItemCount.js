import { useState } from "react";


const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount (count + 1);

        
    }
    const decrement = ()=>{
        count > 0 ? setCount(count - 1):setCount(count);
        
    }

    return (
        <div>

        <h1>CONTADOR</h1>
        <h2>{count}</h2>
        <button onClick = {decrement}> Restar</button>
        <button onClick = {increment}>Sumar</button>
        <button onClick = {onAdd}>Agregar Al Carrito</button>

        </div>
    )

}
export default ItemCount;