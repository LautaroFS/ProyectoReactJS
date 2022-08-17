import {useState} from "react"; 
import { Button } from "react-bootstrap";

const Contador = (props) =>{
    
    const [contadorHijo, setContadorHijo] = useState(props.initial)

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
        props.sumaCarrito(contadorHijo)
        setContadorHijo(0)
        props.onAdd(contadorHijo)
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