import {useState} from "react"; 
import { Button } from "react-bootstrap";

const Contador = (props) =>{
    
    const [contador, setContador] = useState(props.initial)

     const sumar = () =>{
        if(contador<props.stock){
            setContador(contador+1)
        }
    }

    const restar = () =>{
        if(contador>props.initial){
            setContador(contador-1)
        }
    }

    const borrar = () =>{
        setContador(0)
    }
    return(
        <>
            <p>Cantidad: {contador}</p>
            <Button className="btn" onClick={sumar}>+</Button>
            <Button className="btn" onClick={restar}>-</Button>
            <Button className="btn" onClick={borrar}>Eliminar todo</Button>
        </>
    )
}

export default Contador