import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
const { Provider } = CartContext

export const useCarrito = () => {
    return useContext(CartContext)
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
        return cart.reduce((acc, x)=> acc += x.contadorPadre, 0)
    }

    const getItemPrice = () =>{
        return cart.reduce((acc, x) => acc += (x.cantidad * x.precio), 0)
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
    console.log(cart)
    return(
        <Provider value={valorContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider