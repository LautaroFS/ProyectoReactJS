import Contador from "../../Contador"
import { useState } from "react"
import { useCarrito } from "../../CustomProvider"


const ItemDetail = ({products}) =>{

    const [contadorPadre, setEstadoPadre] = useState(0)
    const { sumarProductos } = useCarrito()
    const [qty ,setQty] = useState(1)

    const sumaCarrito = (param) => {
      setEstadoPadre(param)
    }

    const onAdd = (contador) =>{
        products.cantidad = contador
        sumarProductos(products, qty)
    }


    return(
        <div className="prodDetail">
            <h4>{products.nombre}</h4>
            <img src={products.imagen} alt="" className="imagenes"/>
            <p>{products.descripcion}</p>
            <p>{products.precio}</p>
            <Contador onAdd={onAdd} initial={0} stock={products.stock} 
            contadorPadre={contadorPadre} sumaCarrito={sumaCarrito} />
        </div>
    )
}

export default ItemDetail