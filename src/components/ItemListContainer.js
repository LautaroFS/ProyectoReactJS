import ItemList from "./ItemsList"
import { useEffect, useState } from "react"
import productoBaseDeDatos from "./Productos"

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])
    const [cargando , setCargando] = useState(true)

    useEffect(()=> {
        const peticion = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(productoBaseDeDatos)
            },3500)
        })
        peticion.then((correcto)=>{
            setProductos(correcto)
            setCargando(false)
        })
        peticion.catch((error)=>{

        })
    },[])

    if(cargando){
        return(
        <h3>Cargando...</h3>
        )
    }else{
        return(
           <ItemList productos={productos}/>
        )
    }
}

export default ItemListContainer