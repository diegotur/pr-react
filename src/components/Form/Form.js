import { Form, Button } from 'react-bootstrap';
import { useState, createContext} from "react"

export const FormContext = createContext({
    declaredName:"",
    declaredAddress:"",
    declaredPhone:"",
    declaredEmail:""
})

const ClientForm = () => {
    const [declaredName, setName] = useState("");
    const [declaredAddress, setAddress] = useState("");
    const [declaredEmail, setEmail] = useState("");
    const [declaredPhone, setPhone] = useState("");
  
  
    const nameChangeHandler = (event) => {setName(event.target.value)}      
    const addressChangeHandler = (event) => {setAddress(event.target.value)}
    const mailChangeHandler = (event) => {setEmail(event.target.value)}
    const phoneChangeHandler = (event) => {setPhone(event.target.value)}
  
    
  
    const submitHandler = (event) => {
      event.preventDefault();
  
          /* setId('');
          setName('');
          setRole(''); */
    };
return(

    
    <Form onSubmit={submitHandler}>
<Form.Group  controlId="form.Name">
      <Form.Label></Form.Label>
      <Form.Control type="text" value={declaredName} onChange={nameChangeHandler}placeholder="Nombre y Apellido" required/>
  </Form.Group>
  <Form.Group controlId="form.Address">
      <Form.Label></Form.Label>
      <Form.Control type="text" value={declaredAddress} onChange={addressChangeHandler} placeholder="Dirección" required/>
  </Form.Group>
  <Form.Group  controlId="form.Phone">
      <Form.Label></Form.Label>
      <Form.Control type="number" value={declaredEmail} onChange={phoneChangeHandler} placeholder="Teléfono" required/>
  </Form.Group>
  <Form.Group  controlId="form.Email">
      <Form.Label></Form.Label>
      <Form.Control type="email" value={declaredPhone} onChange={mailChangeHandler} placeholder="E-Mail" required/>
  </Form.Group>
  <Button type='submit'>Enviar</Button>
</Form>
)
}



export default ClientForm