import { useState } from "react"
import "./login.css"
const Login=()=>{

    const [user,setUser]=useState("")

    const changeInput=(e)=>{
        setUser(e.target.value)
        if(e.target.value.toLowerCase()[e.target.value.length-1]=="o"){
            alert("Por favor, ¡Nombres de usuario sin la letra o!") 
        }
    }

    

    const register=(e)=>{
        e.preventDefault()
        alert(user.toLowerCase().includes("o") || user==""? "Usuario inválido para registrarse": "¡Usuario registrado correctamente!")
    }

    return <form onSubmit={register} className="login">
        <label htmlFor="">Usuario</label>
        <input type="text" onChange={changeInput}/>
        <input type="submit" value="Registrar"/>
        <p className="pass">{user}</p>
    </form>
}

export default Login