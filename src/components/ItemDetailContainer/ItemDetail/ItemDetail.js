import Contador from "../../Contador"
import { useContext, useState } from "react"
import { CartContext, } from "../../CustomProvider"
import { toast } from "react-toastify"


const ItemDetail = ({products}) =>{

    const [contadorPadre, setEstadoPadre] = useState(0)
    const {isInCart, sumarProductos} = useContext(CartContext)
    
    const sumaCarrito = (param) => {
        setEstadoPadre(param)
    }

    const onAdd = (contador) =>{
        products.cantidad = contador
        sumarProductos(products, contadorPadre)
        isInCart(products.id)
        toast.success("¡Producto agregado correctamente!")
    }


    return(
        <div className="prodDetail">
            <h4>{products.nombre}</h4>
            <img src={products.imagen} alt="" className="imagenes"/>
            <p>{products.descripcion}</p>
            <p>{products.precio}</p>
            <Contador onAdd={onAdd} initial={0} stock={products.stock} 
            contadorPadre={contadorPadre} setEstadoPadre={setEstadoPadre} sumaCarrito={sumaCarrito} />
        </div>
    )
}

export default ItemDetail