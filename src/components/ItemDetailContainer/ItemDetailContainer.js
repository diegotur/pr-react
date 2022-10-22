import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../AsyncMock";
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'

const ItemDetailContainer = ({setCart})=>{
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
        return <div className="DotSpinner"><DotSpinner
        size={80}
        speed={0.9} 
        color="black" 
       /></div>
    }

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...products } setCart={setCart}/>

        </div>
    )
}
export default ItemDetailContainer