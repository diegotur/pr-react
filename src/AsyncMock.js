const products = [
    {id: 1,
    name: "caja1",
    price: 300,
    category: "caja chica",
    stock: 3,
    description: "Descripción Caja Chica"},
    {id: 2,
    name: "caja2",
    price: 500,
    category: "caja mediana",
    stock: 6,
    description: "Descripción Caja Mediana"},
    {id: 3,
    name: "caja3",
    price: 800,
    category: "Caja Grande",
    stock: 10,
    description: "Descripción Caja Grande"},
]

export const GetProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000)

    })
}