import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CustomProvider"

const CartWidget = () =>{

    const {cantidad} = useContext(CartContext)

    return(
                <Link className="cart1" to="/carrito">
                    <span className="material-symbols-outlined">
                    shopping_cart_checkout
                    </span>
                    <h5>{cantidad}</h5>
                </Link>
    )
}

export default CartWidget