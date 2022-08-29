import Item from "./Item/Item"

const ItemList = ({productos}) =>{
    return(
        <section>
            {productos.map((producto, prod) => {
                return <Item producto = {producto} key={prod} />
            })}
        </section>
    )
}

export default ItemList