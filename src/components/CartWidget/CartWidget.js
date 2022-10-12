import './CartWidget.css'

const CartWidget = () => {
    return (
        <div  id="carrito">
            <img id ="cartImg" src={"https://app.projectquoting.com/images/Animated/animat-essential-three/shopping-cart/animat-shopping-cart-color.gif"} alt='cart'/>
            <div id="cartNumber">
            0
            </div>
        </div>
    )
}

export default CartWidget