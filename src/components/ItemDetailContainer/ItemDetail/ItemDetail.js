import Contador from "../../Contador"
import { Link } from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({products}) =>{

    const [contadorPadre, setEstadoPadre] = useState(0)

    const sumaCarrito = (param) => {
      setEstadoPadre(param)
    }


    return(
        <div className="prodDetail">
            <div>
                <Link to="/carrito">
                <span class="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
                    </Link>
                <p>CARRITO: {contadorPadre}</p>
            </div>  
            <h4>{products.nombre}</h4>
            <img src={products.imagen} alt="" className="imagenes"/>
            <p>{products.descripcion}</p>
            <p>{products.precio}</p>
            <Contador onAdd="onAdd" initial={0} stock={products.stock} contadorPadre={contadorPadre} sumaCarrito={sumaCarrito} />
        </div>
    )
}

export default ItemDetail