import ItemList from "./ItemList/ItemsList"
import { useEffect, useState } from "react"
import {db} from "../../Firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    
    const {categoria} = useParams()
    const [productos, setProductos] = useState([])
    
    useEffect(()=> {
        if(!categoria){
            
            const productosCollection = collection( db, "Productos")
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
            })
            
        }else{
        
            const productosCollection = collection(db, "Productos")
            const filtro = query(productosCollection ,where("categoria","==", categoria))
            const consulta = getDocs(filtro)

            consulta
            .then(snapshot=> {
                setProductos(snapshot.docs.map(doc=>{
                    return{
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })

        .catch(err=>{
            console.log(err)
        })
        
        }
        },[categoria])
        

    if(productos.length === 0){
        return(
            <h3>Cargando...</h3>
            )
        }else{
            return(
            <ItemList productos={productos}/>
        )
    }}

export default ItemListContainer