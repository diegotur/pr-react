import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/box.png'
import Button from '../Button/Button'


const Navbar = () => {
    return (
        <nav className = "Navbar">
            <div className ="contLeft">
            <img src= {logo} alt="box" className="logo"></img>  
            <h1 id="boxFactory">BOX FACTORY</h1>
            </div>
            
            <div className="divButtons">
                <Button style={
                    {backgroundSize:"55% 55%", 
                    backgroundPosition:"8vh 2.5vw",
                    fontSize:"2vh",
                    paddingTop: "1vh",
                    }
                    }>
                        <div id="smallBox">
                            CAJAS 
                            <br></br>
                            CHICAS
                        </div>
                </Button>
                <Button style={
                    {backgroundSize:"70% 70%", 
                    backgroundPosition:"2vh 1.5vw"}
                    }>
                <div id="mediumBox">
                            CAJAS 
                            <br></br>
                            MEDIANAS
                        </div>
                </Button>
                <Button style={
                    {backgroundSize:"90% 90%", 
                    backgroundPosition:"2vh 0.5vw"}
                    }>
                <div id="bigBox">
                    CAJAS<br></br>GRANDES
                </div>
                </Button>
                </div>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar