import { createContext, useState } from "react"

export const contexto = createContext()
const {Provider} = contexto

const CustomProvider = (props) =>{

    const [cantidad, setCantidad] = useState(0)

    const sumarProductos = (produc) =>{
        setCantidad(cantidad + produc.cantidad);
    }

    const restarProductos = () =>{}

    const valorContexto = {
        cantidad : cantidad,
        carrito : [],
        sumarProductos,
        restarProductos,

    }
    return(
        <Provider value={valorContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider