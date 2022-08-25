import { useContext } from "react"
import Formulario from "./Formulario"
import { CartContext } from "./CustomProvider" 

const Carrito = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    if( cart.length > 0){
        return(
            <div>
                {
                    cart.map((element, index) => {
                        return <div key={index} >
                            <div>
                                <img src={element.imagen} alt={element.nombre} />
                            </div>
                            <div>
                                <h3>{element.nombre}</h3>
                                <h3>Precio: ${element.precio} </h3>
                                <h3>Unidades: {element.qty} </h3>
                            </div>
                        </div>
                    } )
                }
            </div>
        )
    }

    return(
        <>
            <div>
                <h3>Carrito:</h3>

            </div>
           <Formulario/>
        </>
    )
}

export default Carrito