import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, useNavigate } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { useAsync } from '../../Hooks/useAsync'
import { getProductById } from '../../services/firestore/products'


const ItemDetailContainer = ()=>{

    const { productId } = useParams()

    const navigate = useNavigate()

    const getProductsFromFirestore = ()=> getProductById(productId)
    
    const {data:products, error, loading} = useAsync(getProductsFromFirestore, [productId])
    
    if (error){
        <h1>Hubo Un error</h1>
    }

    if (loading) {
        return <div className="DotSpinner"><DotSpinner
        size={80}
        speed={0.9} 
        color="black" 
    /></div>
    }

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...products } />
            <button onClick={()=> navigate(-1)} className="ButtonV">VOLVER</button>
        </div>
    )
}
export default ItemDetailContainer