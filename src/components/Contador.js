import { Button } from "react-bootstrap";

const Contador = (props) =>{
    
    
    
    const sumar = () =>{
        if(props.contadorPadre<props.stock){
            props.setEstadoPadre(props.contadorPadre+1)
        }
    }
    
    const restar = () =>{
        if(props.contadorPadre>props.initial){
            props.setEstadoPadre(props.contadorPadre-1)
        }
    }

    const confirmar = () =>{
        props.sumaCarrito(props.contadorPadre)
        props.setEstadoPadre(0)
        props.onAdd( props.contadorPadre)
    }
    return(
        <>
            <p>Cantidad: {props.contadorPadre}</p>
            <Button className="btn" onClick={props.contadorPadre < props.stock ? sumar : () =>{alert("No hay mas unidades de las que se aparecen ahi.")}}>+</Button>
            <Button className="btn" onClick={restar}>-</Button>
            <Button className="btn" onClick={confirmar}>Confirmar.</Button>
        </>
    )
}

export default Contador