import ItemList from "./ItemList/ItemsList"
import { useEffect, useState } from "react"

/* ------------------------------ BASE DE DATOS ----------------------------- */
import {db} from "../../Firebase"
import { collection, getDocs } from "firebase/firestore"

/* ----------------------------------------------------------------------- */

const ItemListContainer = () => {
    
    const [productos,setProductos] = useState([])
    
    useEffect(()=> {
        
        const productosCollection = collection(db, "Productos")
        const consulta = getDocs(productosCollection)
       
        consulta
        .then(snapshot=>{
            const productos = snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos(productos)
        })
        .catch(err=>{
            console.log(err)
        })

    
     },[])

    if(productos){
        return(
           <ItemList productos={productos}/>
        )
    }else{
        return(
        <h3>Cargando...</h3>
        )
    }}

export default ItemListContainer