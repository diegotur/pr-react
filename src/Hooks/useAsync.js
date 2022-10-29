import { useState, useEffect } from 'react' 

export const useAsync = (asyncFn, dependencies = []) =>{
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if (!array.isArray(dependencies)){
        dependencies = []
    }
   

    useEffect(() => {
        setLoading(true)

        asyncFn(collectionRef).then(data => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data }
            })
            setData(productsAdapted)
            
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [dependencies])


    return {
        data,
        error,
        loading
    }

}