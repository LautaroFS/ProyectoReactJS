import { useState, useEffect } from "react";
import productoBaseDeDatos from "../Productos"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import customFetch from "../CustomFetch";

const ItemDetailContainer = ({sumaCarrito}) => {

    const r = useParams()
    const [products, setProduct] = useState({})
    const [carga, setCarga] = useState(true)

    useEffect(()=>{
        setCarga(true)
        customFetch(productoBaseDeDatos)
        .then(res=>{
            setCarga(false)
            setProduct(res.find(products => r.id == products.id))
        })
    },[r.id])
    if(carga){
        return(
            <h3>Cargando...</h3>
        )
    }else{
        return(
        <ItemDetail products={products}/>
        )
    }
}

export default ItemDetailContainer