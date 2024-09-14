import Item from "../item/Item"
import "./listItems.css"
const ListItems=({taskList,setTaskList})=>{
    

    return(
        <div className="cont">
            {taskList.map((x)=><Item obj={x}/>)}
        </div>
    )
}

export default ListItems