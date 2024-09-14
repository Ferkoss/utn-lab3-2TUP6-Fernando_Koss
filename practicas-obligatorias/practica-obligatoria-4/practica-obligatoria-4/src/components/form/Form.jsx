import { useState } from "react"
import "./form.css"
const Form=({list,setList})=>{
    const [inputText,setInputText]=useState("")
    const inputHandler=(e)=>{
        setInputText(e.target.value)
    }
    const clickButton=(e)=>{
        e.preventDefault()
        setList([
            ...list,
            inputText

        ])
        console.log(list)
    }

    return(
        <form onSubmit={clickButton}>
            <label htmlFor="form">Ingrese la tarea</label>
            <input type="text" id="form" name="form" onChange={inputHandler} value={inputText}/>
            <button>Enviar</button>
        </form>
    )
}

export default Form