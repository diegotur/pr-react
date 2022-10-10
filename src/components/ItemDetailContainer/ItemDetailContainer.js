import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom"



const ItemDetailContainer = ()=>{
    const [products, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(()=>{
        getProductById(productId).then(response =>{
            setProduct(response)
            console.log(response)
        }).finally(()=>{
            setLoading(false)
    })
    },[productId])

    if (loading) {
        return <h1>Cargando..</h1>
    }

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...products}/>

        </div>
    )
}
export default ItemDetailContainer