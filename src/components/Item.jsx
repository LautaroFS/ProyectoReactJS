import Contador from "./Contador"

const Item = ({producto}) =>{
    console.log(producto)
    return(
    <div className="prod">
        <h4 id={producto.id} >{producto.nombre}</h4>
        <p>{producto.descripcion}</p>
        <p> Precio: ${producto.precio}</p>
        <Contador onAdd={"onAdd"} initial={0} stock={producto.stock}/>
    </div>
    )
    }

export default Item