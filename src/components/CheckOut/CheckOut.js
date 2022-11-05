import './CheckOut.css'
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import ClientForm from '../Form/Form'
import Swal from "sweetalert2";
import { DotSpinner } from '@uiball/loaders'


const CheckOut=()=>{

    const {cart, total, clearCart} = useContext(CartContext)

    const [personalData, setPersonalData] = useState(false)

    const [orderData, setOrderData] = useState()
        

const DataCompleted = (declaredName, declaredAddress, declaredPhone, declaredEmail) =>{

    setOrderData({declaredName, declaredAddress, declaredPhone, declaredEmail})
    
    setPersonalData(true)
}

    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate ()
  


    
    const CreateOrder= async ()=>{
        
        setLoading(true)
        
        try{
            
            const objOrder = {
                buyer: orderData,
                items: cart,
                total
            }
        
    const batch = writeBatch(db)

    const outOfStock = []

    const ids = cart.map(prod => prod.id)
    
    const productsRef = collection(db, 'products')
    
    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

    const {docs} = productsAddedFromFirestore

    docs.forEach(doc=>{
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        const productsAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productsAddedToCart?.quantity

        if (stockDb >= prodQuantity){
            batch.update(doc.ref, {stock:stockDb - prodQuantity})
        } else{
            outOfStock.push({id: doc.id, ...dataDoc})
        }
    })
    if (outOfStock.length !== 0){

        Swal.fire({
            title:"ERROR",
            text:`Uno de los productos seleccionados ya no está en stock`,
            icon: false,
            buttons: true,
            dangerMode: true,
            timer:6000,
            customClass:"swAlert"
        })
        navigate ('/cart')

            
}else{
        await batch.commit()
        
        const orderRef = collection(db, 'orders')
        
        const orderAdded = await addDoc(orderRef, objOrder)
        
        Swal.fire({
            title:"COMPRA REALIZADA CON ÉXITO",
            text:`Enviamos el código de compra ${orderAdded.id} 
            a 
            "${orderData.declaredEmail}"`,
            icon: false,
            buttons: true,
            dangerMode: true,
            timer:6000,
            customClass:"swAlert"
        })
        clearCart()
        
        navigate ('/')
    
    }

    } catch(error){
        console.log(error)
    } finally {
            setLoading(false)

    }
}


if (loading){

    return (
        <div>
    <div className="DotSpinner"><DotSpinner
        size={80}
        speed={0.9} 
        color="black" 
        /></div><h1>Chequeando stock...</h1>
        </div>
    )
}

return (

    <div>
        <h1>COMPLETÁ TUS DATOS</h1>
        <ClientForm DataCompleted={DataCompleted}/>
            { personalData?<button className="comprarBtn" type="submit" onClick={CreateOrder}>CONFIRMAR COMPRA</button>
        : ""}
    </div>
)
}

export default CheckOut