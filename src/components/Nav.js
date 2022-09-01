import CartWidget from "./CartWidget"


const Nav = (tipo) => {
    if(tipo.type === "header"){
        return(
            <nav>
                <div>
                    <a href="#bombas">Bombas</a>
                    <a href="#herramientas">Herramientas</a>
                    <a href="#cañerias">Cañerias</a>
                </div>
                <div className="cart">
                    <CartWidget />
                </div>
            </nav>
            )
            } else {
            return(
            <footer>
                <a href="">POLITICAS</a>
                <a href=""> FORMAS DE PAGO</a>
                <a href="">CONTACTO</a>
            </footer>
            )
            }

}

export default Nav