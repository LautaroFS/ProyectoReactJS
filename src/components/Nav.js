const Nav = (tipo) => {
    if(tipo.type === "header"){
        return(
            <nav>
                <a href="#bombasDeAgua">Bombas</a>
                <a href="#ferreteria">Ferreteria</a>
                <a href="#cañerias">Cañerias</a>
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