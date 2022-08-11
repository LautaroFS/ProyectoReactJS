import Contador from "../../Contador"

const ItemDetail = ({products}) =>{
    console.log(products)
    return(
        <div className="prodDetail">
            <h4>{products.nombre}</h4>
            <img src={products.imagen} alt="" className="imagenes"/>
            <p>{products.descripcion}</p>
            <p>{products.precio}</p>
            <Contador onAdd="onAdd" initial={0} stock={products.stock} />
        </div>
    )
}

export default ItemDetail