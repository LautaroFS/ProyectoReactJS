import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
const { Provider } = CartContext

export const useCarrito = () => {
    const valor_del_contexto = useContext(CartContext)
    return valor_del_contexto 
} 

const CustomProvider = (props) =>{

    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])


    const sumarProductos = ( item, contadorPadre) =>{
        setCantidad(cantidad + item.cantidad);
        const newItem = {
            ...item,
            contadorPadre
        }
        if(isInCart(newItem.id)){
            const findProducts = cart.find(x => x.id === newItem.id)
            const productsIndex = cart.indexOf(findProducts)
            const auxArray = [...cart]
            auxArray[productsIndex].contadorPadre += contadorPadre
            setCart(auxArray)
        } else{
            setCart([...cart, newItem])
        }
    }

    const restarProductos = (id) =>{
        return setCart (cart.filter(x => x.id !== id))
    }

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const emptyCart = () =>{
        return setCart([])
    }

    const getItemQty = () =>{
        const total = cart.reduce((acc, x)=> acc += x.contadorPadre, 0)
        return total
    }

    const getItemPrice = () =>{
        const precioTotal = cart.reduce((acc, x) => acc += (x.contadorPadre * x.precio), 0)
        return precioTotal,
        console.log(precioTotal)
    }


    const valorContexto = {
        cantidad : cantidad,
        cart,
        sumarProductos,
        restarProductos,
        isInCart,
        emptyCart,
        getItemPrice,
        getItemQty

    }

    return(
        <Provider value={valorContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider