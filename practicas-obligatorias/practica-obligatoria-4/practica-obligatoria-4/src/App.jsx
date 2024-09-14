import { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import ListItems from './components/listItems/ListItems'

function App() {

  const [taskList,setTaskList]=useState([])

  return (
    <>
    <Form list={taskList} setList={setTaskList}/>
    <ListItems taskList={taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
