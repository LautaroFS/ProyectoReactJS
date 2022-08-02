import Contador from "./Contador"


const Ferreteria = () =>{
    return(
        <div className="Ferreteria">
            <h3 id="ferreteria">Ferretia</h3>
            <div id="ferreteria1">
                <div>
                    <h4>Pico de loro</h4>
                    <p>Es la herramienta que no te puede faltar a la hora de trabajar.</p>
                    <Contador onAdd={"onAdd"} initial={0} stock={5}/>
                </div>
            </div>
        </div>
    )
}

export default Ferreteria