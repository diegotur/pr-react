const products = [
    {id: '1',
    name: "The Last Of Us",
    price: 300,
    category: "chica",
    img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/112538623017261-3c58e6541c3890ced415633141359934-640-0.jpg", 
    stock: 3,
    description: "Descripción Caja Chica"},
    {id: '2',
    name: "caja2",
    price: 500,
    category: "mediana",
    img:'https://w7.pngwing.com/pngs/539/891/png-transparent-paper-cardboard-box-corrugated-fiberboard-carton-box.png', 
    stock: 6,
    description: "Descripción Caja Mediana"},
    {id: '3',
    name: "caja3",
    price: 800,
    category: "grande",
    img:'https://www.pngall.com/wp-content/uploads/5/Cardboard-Box-Transparent.png', 
    stock: 10,
    description: "Descripción Caja Grande"},
    {id: '4',
    name: "caja3",
    price: 800,
    category: "grande",
    img:'https://www.pngall.com/wp-content/uploads/5/Cardboard-Box-Transparent.png', 
    stock: 10,
    description: "Descripción Caja Grande"},
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000)

    })
}
export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId)) 
                
    },1000)

    })
}