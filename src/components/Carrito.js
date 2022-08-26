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
                    cart.map((product, index) => {
                        return <div key={index} className="carrito" >
                            <div>
                                <img src={product.imagen} className="imagenes" alt={product.nombre} />
                                <h3>{product.nombre}</h3>
                                <h3>Precio: ${product.precio} </h3>
                                <h3>Unidades: {product.contadorPadre} </h3>
                            </div>
                            <div>
                                <Formulario/>
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
        </>
    )
}

export default Carrito