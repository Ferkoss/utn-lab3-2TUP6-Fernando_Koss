import { useState, useRef } from "react"
import "./item.css"

const Item=({obj})=>{

    const divTask=useRef(null)



    const deleteItem=()=>{
        //setTaskList(taskList.filter(x=>x.id!=obj.id))
        //divTask.current.style.display="none"
        divTask.current.remove()
        console.log(divTask.current)
        divTask.current=null
    }
    const changeColor=()=>{
        console.log(divTask.current)
        divTask.current.classList.add("completed")
        
    }
    
    return(
        <div className="item" ref={divTask}>
            <p>{obj}</p>
            <div className="div-buttons">
            <button type="button" onClick={deleteItem}>Eliminar</button>
            <button type="button" onClick={changeColor}>Hecho</button>
            </div>
        </div>
    )
}

export default Item