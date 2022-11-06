import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../firebase'
import { createAdaptedProductFromFirestore } from '../../Adapter/ProductAdapter'
import { createAdaptedCategoryFromFirestore } from '../../Adapter/categoryAdapter'


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
            const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
            const docRef = doc(db, 'products', productId) 
            
        getDoc(docRef)
            .then(response => {
                const productAdapted = createAdaptedProductFromFirestore(response)
                resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}
export const getProductByCategory=()=>{

    return new Promise((resolve, reject) => {
    
        const collectionRef = query (collection(db, 'categories'), orderBy("order"));

        getDocs(collectionRef).then(response =>{
            const categoriesAdapted = response.docs.map(doc => {
                return createAdaptedCategoryFromFirestore(doc)
            })
            resolve(categoriesAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}