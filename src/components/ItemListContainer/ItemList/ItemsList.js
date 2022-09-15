import Item from "./Item/Item"

const ItemList = ({productos}) =>{
    return(
        <section>
            {
        productos.map(producto=> <Item key={producto.id} producto= {producto}/>)
        }
        </section>
    )
}

export default ItemList