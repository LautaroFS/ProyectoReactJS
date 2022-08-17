import { Link } from "react-router-dom"

const Item = ({producto}) =>{
    return(
        <>
            <div className="prod">
                <h4 id={producto.categoria} >{producto.nombre}</h4>
                <img src={producto.imagen} alt="" className="imagenes" />
                <p>${producto.precio}</p>
                <Link to={`/detalle/${producto.id}`} className="buttonDetalle"> Ver detalle.</Link>
            </div>
        </>
    )
    }

export default Item