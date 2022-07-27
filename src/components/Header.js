import Nav from "./Nav"

const Header = ({contador}) => {
return (
<header id="header">
    <h1 className="titulo">Corralon Santiago</h1>
    <Nav type="header"/>
    <span class="material-symbols-outlined">
        shopping_cart_checkout
    </span>
    <p>Productos en el carrito: {contador}</p>
</header>
)
}

export default Header