import { Button } from "react-bootstrap"

const Ferreteria = () =>{
    return(
        <div className="Ferreteria">
            <h3 id="ferreteria">Ferretia</h3>
            <div id="ferreteria1">
                <div>
                    <h4>Pico de loro</h4>
                    <p>Es la herramienta que no te puede faltar a la hora de trabajar.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
                <div>
                    <h4>Pinza universal de 180mm</h4>
                    <p>La pinza que puede contra todo.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
                <div>
                    <h4>Alabre de 2mm</h4>
                    <p>El alabre que necesitas para atar cualquier cosa.</p>
                    <Button className="btnAgregar">Agregar</Button>
                    <Button>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}

export default Ferreteria