import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [products, setProduct] = useState({})

    useEffect(()=>{
        
        const productosCollection = collection(db, "Productos")
        const referencia = doc(productosCollection,id)
        const pedido = getDoc(referencia)

        pedido
        .then((res)=>{
            setProduct(res.data())
        })
        .catch((err)=>{
            
        })
    },[id])

    if(products){
        return(
        <ItemDetail products={products}/>
        )
    }else{
        return(
            <h3>ERROR</h3>
        )
    }
}

export default ItemDetailContainer