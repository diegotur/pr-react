import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { useAsync } from '../../Hooks/useAsync'
import { getProductById } from '../../services/firestore/products'


const ItemDetailContainer = ()=>{

    /* const [products, setProduct] = useState()
    const [loading, setLoading] = useState(true) */


    const { productId } = useParams()

    console.log(productId)

    
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
        </div>
    )
}
export default ItemDetailContainer