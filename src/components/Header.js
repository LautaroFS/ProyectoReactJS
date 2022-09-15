import Nav from "./Nav"
import { Link } from "react-router-dom"

const Header = (props) => {
return (
<header id="header">
    <Link to="/">
        <h1 className="titulo">Corralon {props.greeting1} </h1>
    </Link>
    <Nav/>
</header>
)
}

export default Header