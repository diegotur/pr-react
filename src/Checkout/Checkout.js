import { useContext } from "react"
import { CartContext } from "../CartContext/cartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../services/firebase"

const Checkout=()=>{
    const {cart, total} = useContext(CartContext)
    
    const createOrder= async ()=>{
        try{

            const objOrder = {
                buyer: {
                    name:"",
                    phone:"",
                    mail:""
                },
                items: cart,
                total
            }
    /* const collectionRef = collection(db, 'orders');
    
    addDoc(collectionRef, objOrder).then(response =>{
        console.log(response.id)
    }).catch(error=>{
        console.log(error)
    }) */
    
    const batch = writeBatch(db)

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
        }
    })

    } catch(error){
        console.log(error)
    }
}








return (
    <div>
        <h1>CheckOut</h1>
        <h2>Formulario</h2>
        <button onClick={createOrder}>Generar Orden</button>
    </div>
)
}
export default Checkout

