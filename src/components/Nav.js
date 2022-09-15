import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const Nav = () => {

    

        return(
            <nav>
                <NavLink to="/categoria/bombas">
                    Bombas
                </NavLink>
                <NavLink to="/categoria/herramientas">
                    Herramientas
                </NavLink>
                <NavLink to="/categoria/cañerias">
                    Cañerias
                </NavLink>
                <div className="cart">
                    <CartWidget />
                </div>
            </nav>
            )
}

export default Nav