import { useState } from "react"

const Formulario = () => {
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState ("")
    const [email, setEmail] = useState("")
    const [telefono , setTelefono] = useState("")
    const [usuarios, setUsuario] = useState([])

    const handleChangeNombre = (e) => {
        const input = e.target
        const value = input.value
        setNombre(value)
    }

    const handleChangeApellido = (e) => {
        const input = e.target
        const value = input.value
        setApellido(value)
    }

    const handleChangeEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }
    
    const handleChangeTelefono = (e) => {
        const input = e.target
        const value = input.value
        setTelefono(value)
    }

    const handleConfirm = () =>{
        console.log("click")
        const usuario = {nombre, apellido, email, telefono}
        const usuario_copia = [...usuarios]
        usuario_copia.push(usuario)
        setUsuario(usuario_copia)
    }
    console.log(usuarios)

     return(
        <div className="formulario">
            <h3>DATOS DE ENVIO:</h3>
            <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />
            <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email} />
            <input type="number" placeholder="Telefono" onChange={handleChangeTelefono} value={telefono} />
            <button onClick={handleConfirm} className="btn"> CONFIRMAR</button>
        </div>
     )
}

export default Formulario