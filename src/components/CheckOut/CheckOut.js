import './CheckOut.css'
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"

const CheckOut=()=>{
    const {cart, total, clearCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate ()

    const CreateOrder= async ()=>{

        setLoading(true)

        try{

            const objOrder = {
                buyer: {
                    name: {name},
                    address: {address},
                    phone: {phone},
                    mail: {email}   
                },
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
    if (outOfStock.length === 0){
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        console.log(`el Id de su orden es: ${orderAdded.id}`)

        clearCart()

        setTimeout(()=>{
            navigate ('/')
        }, 3000)

    } else{
        console.log(`Hay productos fuera de stock`)
    }

    } catch(error){
        console.log(error)
    } finally {
        setLoading(false)
    }
}

if (loading){
    return <h1>Se está generando su orden</h1>
}

return (
    <div>
        <h1>CONFIRMÁ TU COMPRA</h1>
        <form>
            <div className='divLabel'>
                <input className="inputs" type="text" name="Nombre" placeholder="Nombre y Apellido" value={name}onChange={(e) => setName(e.target.value)}></input> 
            </div>
            <div className='divLabel'>
                <input className="inputs" type="email" name="mail" placeholder="Dirección" value={address}onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <div className='divLabel'>
                <input className="inputs" type="tel" name="Telefono" placeholder="Teléfono" value={phone}onChange={(e) => setPhone(e.target.value)}></input>
            </div>    
            <div className='divLabel'>
                <input className="inputs" type="email" name="mail" placeholder="E-mail" value={email}onChange={(e) => setEmail(e.target.value)}></input>
            </div>
        </form>
        <button className="comprarBtn" onClick={CreateOrder}>CONFIRMAR COMPRA</button>
    </div>
)
}
export default CheckOut

