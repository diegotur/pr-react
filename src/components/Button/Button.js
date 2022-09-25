import './Button.css'

const Button = ({ children = 'boton', style, handleOnClick }) => {

    const estilosColorFondo = {
        ...style,
        backgroundColor: children === 'Aceptar' 
                            ? 'green' 
                            : children === 'Cancelar'
                                ? 'red'
                                : undefined 
        
    }

    return (
        <button 
            className='Button'
            style={estilosColorFondo}
            onClick={() => handleOnClick(children)}
        >
            {children}
        </button>
    )
}

export default Button