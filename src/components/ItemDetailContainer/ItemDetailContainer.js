import './ItemDetailContainer.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { GetProduct } from '../../AsyncMock'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        GetProduct().then(response=>{
            setProduct(response);
        }).finally(() => {
            setLoading(false)
        })

    },[])

    if (loading){
        return(<h1>Loading...</h1>)
    }
    return( 
        <div className="ilc">
            <h1 >LISTADO DE PRODUCTOS</h1>
            {product.map(prod=> <li key= {prod.id}>{prod.name}</li>)}
        </div>
        ) 
    }
export default ItemDetailContainer