import { Form, Button } from 'react-bootstrap';
import { useState, createContext} from "react"
import './Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const FormContext = createContext({
    declaredName:"",
    declaredAddress:"",
    declaredPhone:"",
    declaredEmail:""
})

const ClientForm = () => {
    const [declaredName, setName] = useState("");
    const [declaredAddress, setAddress] = useState("");
    const [declaredPhone, setPhone] = useState("");
    const [declaredEmail, setEmail] = useState("");
    const [declaredEmail2, setEmail2] = useState("");

    
    const nameChangeHandler = (event) => {setName(event.target.value)}      
    const addressChangeHandler = (event) => {setAddress(event.target.value)}
    const phoneChangeHandler = (event) => {setPhone(event.target.value)}
    const mailChangeHandler = (event) => {setEmail(event.target.value)}
    const repeatMailChangeHandler = (event) => {setEmail2(event.target.value)}

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (!declaredName){
            alertFn("Por favor, completa correctamente este campo", "alertName")
        }
        else if (!declaredAddress){
            alertFn("Por favor, completa correctamente este campo", "alertAddress")
        } 
        else if (!declaredPhone){
            alertFn("Por favor, completa correctamente este campo", "alertPhone")
        }
        else if (declaredEmail !== declaredEmail2 || !declaredEmail ||!declaredEmail2){
            alertFn("Los correos electrónicos deben coincidir", "alertMail")
        }
        /* setId('');
        setName('');
        setRole(''); */
    };
return(

    
    <Form onSubmit={submitHandler}>
        <Form.Group className="divLabel" controlId="form.Name">
            <Form.Label></Form.Label>
            <Form.Control type="text" className="inputs" value={declaredName} pattern="[a-zA-Z ]{1,35}" onChange={nameChangeHandler}placeholder="Nombre y Apellido"/>
        </Form.Group>
        <Form.Group className="divLabel" controlId=".form.Name">
            <Form.Label></Form.Label>
            <Form.Control type="text" className="inputs" pattern="[a-zA-Z 0-9]{1,35}" value={declaredAddress} onChange={addressChangeHandler} placeholder="Dirección"/>
        </Form.Group>
        <Form.Group className="divLabel" controlId="form.Name">
            <Form.Label></Form.Label>
        <Form.Control type="number" pattern="[0-9]" className="inputs" value={declaredPhone} onChange={phoneChangeHandler} placeholder="Teléfono" />
        </Form.Group>
        <Form.Group className="divLabel" controlId="form.Name">
            <Form.Label></Form.Label>
            <Form.Control type="email" className="inputs" value={declaredEmail} onChange={mailChangeHandler} placeholder="Correo Electrónico" />
        </Form.Group>
        <Form.Group className="divLabel" controlId="form.Name">
            <Form.Label></Form.Label>
            <Form.Control type="email" className="inputs" value={declaredEmail2} onChange={repeatMailChangeHandler} placeholder="Reingresa Correo Electrónico" />
            <ToastContainer/>
        </Form.Group>
        <div className="divLabel">
        <Button className="submitBtn"type='submit'>Confirmar Datos</Button>
        </div>
    </Form>
)
}

const alertFn = (a, b) => toast(a, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className:b
    });


export default ClientForm