import './Button.css'

const Button = ({children, style}) => {
   
    return (
        <button className='Button'
        style={style}
        >
           {children}
        </button>
    )
}
export default Button