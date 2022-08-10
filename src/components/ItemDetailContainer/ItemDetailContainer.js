import { useState, useEffect } from "react";
import productoBaseDeDatos from "../Productos"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import customFetch from "../CustomFetch";

const ItemDetailContainer = () => {

    const r = useParams()
    const [products, setProduct] = useState({})
    const [carga, setCarga] = useState(true)

    useEffect(()=>{
        setCarga(true)
        customFetch(productoBaseDeDatos)
        .then(res=>{
            setCarga(false)
            setProduct(res.find(products => r.codigo === products.codigo))
        })
    },[r.codigo])
    if(carga){
        return(
            <h3>Cargando...</h3>
        )
    }else(
        <ItemDetail products={products}/>
    )
}

export default ItemDetailContainer