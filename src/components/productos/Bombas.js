import { Button } from "react-bootstrap"

const Bombas = () => {
    return(
        <div id="BombasDeAgua">
            <h3 id="bombasDeAgua">Bombas</h3>
            <div id="bombas">
                <div>
                    <h4>Bombas sumergible 7,5hp</h4>
                    <p>La bomba de agua mas potente del mercdo.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
                <div>
                    <h4>Bomba para la casera</h4>
                    <p>Una bomba ideal para solucionar los problemas de agua en su casa.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
                <div>
                    <h4>Bomba para pileta</h4>
                    <p>Ideal para rellenar tu pileta en tiempo record.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}

export default Bombas