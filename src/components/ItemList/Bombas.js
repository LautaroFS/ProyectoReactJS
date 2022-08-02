import Contador from "./Contador"


const Bombas = () => {
    return(
        <div id="BombasDeAgua">
            <h3 id="bombasDeAgua">Bombas</h3>
            <div id="bombas">
                <div>
                    <h4>Bombas sumergible 7,5hp</h4>
                    <p>La bomba de agua mas potente del mercdo.</p>
                    <Contador onAdd={"onAdd"} initial={0} stock={3}/>
                </div>
            </div>
        </div>
    )
}

export default Bombas