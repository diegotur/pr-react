import './ItemListContainer.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { GetProducts } from '../../AsyncMock'


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        GetProducts().then(response=>{
            setProducts(response);
        }).finally(() => {
            setLoading(false)
        })

    },[])

    if (loading){
        return(<h1>Loading...</h1>)
    }
    return (
        <div className="ilc">
            <h1 >LISTADO DE PRODUCTOS</h1>
            {products.map(prod=> <li key= {prod.id}>{prod.name}</li>)}
        </div>
        )
    }
export default ItemListContainer