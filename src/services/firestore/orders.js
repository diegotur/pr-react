import { db } from '../firebase/index'
import {getDocs,query,collection,where,Timestamp,writeBatch,addDoc,documentId} from 'firebase/firestore'
import { useContext } from "react"
import { CartContext } from '../../CartContext/CartContext'

export const useOrders = () => {
    const { cart, total} = useContext(CartContext)

    const createOrder = async (orderData) => {
        try {
            const objOrder = {
                items: cart,
                buyer: orderData,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const batch = writeBatch(db)

            const productsRef = collection(db, 'products')

            const outOfStock = []
        
            const importedProducts = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = importedProducts
            
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0) {
                const ordersRef = collection(db, 'orders')
                const orderAdded = await addDoc(ordersRef, objOrder)
                batch.commit()
                return { result: 'orderCreated', id: orderAdded.id }
            } else {
                return { result: 'outOfStockError', products: outOfStock }
            }
        } catch (error) {
            return error
        }
    }

    return {
        createOrder,
    }
}