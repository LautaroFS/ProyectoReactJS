import { useContext, useState } from "react"
import { CartContext } from "./CustomProvider" 
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../Firebase"
import {toast} from "react-toastify"

const Carrito = (props) => {

    const {cart, restarProductos} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState ("")
    const [email, setEmail] = useState("")
    const [telefono , setTelefono] = useState("")

    const handleChangeNombre = (e) => {
        const input = e.target
        const value = input.value
        setNombre(value)
    }

    const handleChangeApellido = (e) => {
        const input = e.target
        const value = input.value
        setApellido(value)
    }

    const handleChangeEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }
    
    const handleChangeTelefono = (e) => {
        const input = e.target
        const value = input.value
        setTelefono(value)
    }

    const handleConfirm = () =>{

        const orden = {
            items : cart,
            buyer : {
                nombre:nombre,
                apellido: apellido,
                telefono: telefono,
                email: email,
            },
            date : serverTimestamp(),
            total : 0,
        }

        const ordenCollection = collection( db, "orders")
        const consulta = addDoc(ordenCollection, orden)

        consulta 
            .then((res)=>{
                console.log(res.id)
                toast.success(`¡Pedido realizado! Codigo de segumiento ${res.id}`)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
        
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
                                <button className="btn" onClick={()=>restarProductos(product.id)} >VACIAR CARRITO</button>
                            </div>
                            <div className="formulario">
                                <h3>DATOS DE ENVIO:</h3>
                                <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
                                <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />
                                <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email} />
                                <input type="number" placeholder="Telefono" onChange={handleChangeTelefono} value={telefono} />
                                <button onClick={handleConfirm} className="btn"> CONFIRMAR</button>
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