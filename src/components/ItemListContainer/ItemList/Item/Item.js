import { Link } from "react-router-dom"

const Item = ({producto}) =>{
    return(
        <>
            <div className="prod">
                <h4 id={producto.id}>{producto.nombre}</h4>
                <img src={producto.imagen} alt="" className="imagenes" />
                <p>${producto.precio}</p>
                <Link to="/detalle" className="buttonDetalle" key={producto.key}> Ver detalle.</Link>
            </div>
        </>
    )
    }

export default Item