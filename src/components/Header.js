import Nav from "./Nav"

const Header = (props, {sumaCarrito}) => {
return (
<header id="header">
    <h1 className="titulo">Corralon {props.greeting1} </h1>
    <Nav type="header"/>
</header>
)
}

export default Header