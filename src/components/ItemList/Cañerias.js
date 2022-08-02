import Contador from "./Contador"

const Cañerias = () => {
    return(
        <div className="Cañerias">
            <h3 id="cañerias">Cañerias</h3>
            <div id="cañerias1">
                <div>
                    <h4>Caño termofusion 3mm</h4>
                    <p>El caño ideal para la instalacion de agua en tu casa.</p>
                    <Contador onAdd={"onAdd"} initial={0} stock={6} />
                </div>
            </div>
        </div>
)
}

export default Cañerias