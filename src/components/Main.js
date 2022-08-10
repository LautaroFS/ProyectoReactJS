import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { Routes, Route } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"

const Main = () => {
    return(
        <main className="general">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle" element={<ItemDetailContainer/>}/> 
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default Main