import {useState} from "react"; 
import { Button } from "react-bootstrap";

const Contador = (props , {contadorPadre , sumaCarrito}) =>{
    
    const [contadorHijo, setContadorHijo] = useState(props.initial)
    const [confirmed, setConfirmed] = useState(false) 

     const sumar = () =>{
        if(contadorHijo<props.stock){
            setContadorHijo(contadorHijo+1)
        }
    }

    const restar = () =>{
        if(contadorHijo>props.initial){
            setContadorHijo(contadorHijo-1)
        }
    }

    const confirmar = () =>{
        sumaCarrito(contadorHijo)
    }
    return(
        <>
            <p>Cantidad: {contadorHijo}</p>
            <Button className="btn" onClick={sumar}>+</Button>
            <Button className="btn" onClick={restar}>-</Button>
            <Button className="btn" onClick={confirmar}>Confirmar.</Button>
        </>
    )
}

export default Contador