import './CheckOut.css'
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { useNavigate } from "react-router-dom"
import ClientForm from '../Form/Form'
import Swal from "sweetalert2";
import { DotSpinner } from '@uiball/loaders'
import {useOrders} from "../../services/firestore/orders"


const CheckOut=()=>{

    const {clearCart} = useContext(CartContext)

    const [personalData, setPersonalData] = useState(false)

    const [orderData, setOrderData] = useState()

    const DataCompleted = (declaredName, declaredAddress, declaredPhone, declaredEmail) =>{
        
        setOrderData({declaredName, declaredAddress, declaredPhone, declaredEmail})
        
        setPersonalData(true)
    }
    
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate ()
    
    const { createOrder } = useOrders()

    const getOrder =()=>{    
        
        setLoading(true)

        createOrder(orderData).then(response => {
            if(response.result === 'orderCreated') {
                clearCart()

                Swal.fire({
                    title:"COMPRA REALIZADA CON ÉXITO",
                    text:`Enviamos el código de compra "${response.id}" 
                    a 
                    ${orderData.declaredEmail}`,
                    icon: false,
                    buttons: true,
                    dangerMode: true,
                    timer:6000,
                    customClass:"swAlert"
                })
        
                navigate ('/')
            }else{
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
            }
   
        }).catch(error => {
            Swal.fire({
                title:`${error}`,
                icon: false,
                buttons: true,
                dangerMode: true,
                timer:6000,
                customClass:"swAlert"
            })
        }).finally(() => {
            setLoading(false)
        })
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
            { personalData?<button className="comprarBtn" type="submit" onClick={getOrder}>CONFIRMAR COMPRA</button>
        : ""}
    </div>
)
}

export default CheckOut