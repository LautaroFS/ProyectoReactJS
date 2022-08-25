import { createContext, useContext, useState } from "react"

export const CartContext = createContext()
const {Provider} = CartContext

export const useCarrito = () => {
    return useContext(CartContext) 
} 

const CustomProvider = (props) =>{

    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])


    const sumarProductos = (produc , item, qty) =>{
        setCantidad(cantidad + produc.cantidad);
        const newItem = {
            ...item,
            qty
        }
        if(isInCart(newItem.id)){
            const findProducts = cart.find(x => x.id === newItem.id)
            const productsIndex = cart.indexOf(findProducts)
            const auxArray = [...cart]
            auxArray[productsIndex].qty += qty
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
        return cart.reduce((acc, x)=> acc += x.qty, 0)
    }

    const getItemPrice = () =>{
        return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)
    }


    const valorContexto = {
        cantidad : cantidad,
        carrito : cart,
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