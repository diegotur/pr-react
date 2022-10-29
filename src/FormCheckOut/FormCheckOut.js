import './FormCheckOut.css'

const FormCheckOut = ()=>{
    
    return(
        <form>
            <div>
                <label for="Nombre"></label>
                <input className="inputs" type="text" name="Nombre" placeholder="Nombre y Apellido"></input> 
            </div>
            <div >
                <label for="Telefono"></label>
                <input className="inputs" type="tel" name="Telefono" placeholder="Teléfono"></input>
            </div>    
            <div >
                <label for="mail"></label>
                <input className="inputs" type="email" name="mail" placeholder="E-mail"></input>
            </div>
        </form>
    )
}

export default FormCheckOut