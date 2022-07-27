import Bombas from "./productos/Bombas"
import Ferreteria from "./productos/Ferreteria"
import Cañerias from "./productos/Cañerias"

const Main = () => {
    return(
        <main>
            <h2>PRODUCTOS</h2>
            <Bombas/>
            <Ferreteria/>
            <Cañerias/>
        </main>
    )
}

export default Main