import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { useAsync } from '../../Hooks/useAsync'
import { getProducts } from '../../services/firestore/products'
import Swal from "sweetalert2";

Swal.fire({
    title: "COMPRA REALIZADA CON ÉXITO",
    text:`Enviamos el código de compra a  `,
    icon: false,
    buttons: true,
    dangerMode: true,
    customClass:"swAlert"

})

const ItemListContainer = () => {

    const { categoryId } = useParams()
 
    const getProductsFromFirestore = ()=> getProducts(categoryId)

    const {data: products, error, loading} = useAsync(getProductsFromFirestore, [categoryId])

    if (error){
        <h1>Hubo Un error</h1>
    }

    if(loading) {
        return <div className="DotSpinner"><DotSpinner
        size={80}
        speed={0.9} 
        color="black" 
        /></div>
    }
    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer