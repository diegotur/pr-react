export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()
    
    const ProductAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description,
        background: data.background,
        stock: data.stock
    }


    return ProductAdapted
}