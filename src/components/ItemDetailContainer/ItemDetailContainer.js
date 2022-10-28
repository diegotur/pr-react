import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"



const ItemDetailContainer = ({setCart})=>{

    const [products, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
   


    useEffect(()=>{

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response =>{
            const data = response.data()
            const productAdapted = ({id:response.id, ...data})
            setProduct(productAdapted)

        }).finally(()=>{
            setLoading(false)
    })
        /* getProductById(productId).then(response =>{
            setProduct(response)
        }).finally(()=>{
            setLoading(false)
    }) */
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
            <ItemDetail {...products } />
        </div>
    )
}
export default ItemDetailContainer